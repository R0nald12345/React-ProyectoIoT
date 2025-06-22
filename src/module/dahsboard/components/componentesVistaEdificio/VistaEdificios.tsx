import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { edificioService } from "../../service/ServiceEdificios/edificioService";
import { Building } from "../../types/edificio.types";
import ListaEdificio from "../ListaEdificio/ListaEdificio";
import ModalCrearEdificio from "./ModalVistaEdificios/ModalCrearEdificio";
import ModalVerEdificio from "./ModalVistaEdificios/ModalVerEdificio";

const VistaEdificios = () => {
    
    const [filtro, setFiltro] = useState("");
    const [edificios, setEdificios] = useState<Building[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [openModal, setOpenModal] = useState(false);


    const obtenerEdificios = async () => {
        try {
            setIsLoading(true);
            const response = await edificioService.getAllBuildings();
            // Aquí está el cambio principal: acceder a response.buildings
            setEdificios(response.buildings);
            console.log("Edificios obtenidos:", response);
        } catch (error) {
            console.error("Error al obtener edificios:", error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        obtenerEdificios();
    }, []);

    const handleFiltroCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(e.target.value);
    };

      const edificiosFiltrados = edificios.filter((edificio) =>
        edificio.name.toLowerCase().includes(filtro.toLowerCase())
    );



    const handleDelete = async (id: string) => {
        try {
            await edificioService.deleteBuilding(id);
            // Actualizar la lista después de eliminar
            const response = await edificioService.getAllBuildings();
            setEdificios(response.buildings);
        } catch (error) {
            console.error("Error al eliminar edificio:", error);
            throw error; // Propagar el error para que se maneje en el componente ListaEdificio
        }
    };


    return (
        <>
            <ModalCrearEdificio
                open={openModal}
                onClose={() => setOpenModal(false)}
                onEdificioCreated={obtenerEdificios}
            />


            <section className="flex justify-between w-[90%] mx-auto ">
                <button
                    className="w-[10%] bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-3"
                    onClick={() => setOpenModal(true)}
                >
                    + Edificio
                </button>

                <div className="w-[30%]">
                    <div className="w-full flex bg-gray-100 border border-black rounded-xl px-2">
                        <FaMagnifyingGlass className="mt-2" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            onChange={handleFiltroCambio}
                            className="w-full font-semibold rounded-xl py-1 bg-gray-100 px-1 outline-none"
                        />
                    </div>
                </div>
            </section>

            <section className="w-[80%] mx-auto mt-10">
                <div className="w-full flex bg-white rounded-2xl">
                    <h4 className="font-semibold text-start w-[40%] px-3 py-2">
                        Nombre
                    </h4>
                    <h4 className="font-semibold text-center w-[20%] px-3 py-2">
                        Nro Piso
                    </h4>
                    <h4 className="font-semibold text-center w-[20%] px-3 py-2">
                        Nro Habitaciones
                    </h4>
                    <h4 className="font-semibold text-center w-[20%] px-3 py-2">
                        Acciones
                    </h4>
                </div>

                <ul className="overflow-y-auto scrollbar-hide">
                    {isLoading ? (
                        <div className="text-center py-4">Cargando...</div>
                    ) : edificiosFiltrados.length > 0 ? (
                        edificiosFiltrados.map((edificio) => (
                            <ListaEdificio
                                key={edificio.id}
                                edificio={edificio}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <div className="text-center py-4">
                            {filtro ? 'No se encontraron edificios con ese nombre' : 'No hay edificios disponibles'}
                        </div>
                    )}
                </ul>
            </section>
        </>
    );
};

export default VistaEdificios;