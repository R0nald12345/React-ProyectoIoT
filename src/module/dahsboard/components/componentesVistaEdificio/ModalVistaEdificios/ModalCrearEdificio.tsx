import { useState } from "react";
import Swal from "sweetalert2";
import { edificioService } from "../../../service/ServiceEdificios/edificioService";
import { CreateBuildingDTO } from "../../../types/create.edificio.ts";

interface Props {
    open: boolean;
    onClose: () => void;
    onEdificioCreated?: () => void;
}

const ModalCrearEdificio = ({ open, onClose, onEdificioCreated }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [nombre, setNombre] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nombre.trim() || !address.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre y la dirección del edificio son obligatorios',
            });
            return;
        }

        try {
            setIsLoading(true);

            const nuevoEdificio :CreateBuildingDTO = {
                name: nombre,
                address: address,
                geolocation: {
                    additionalProp1: 0,
                    additionalProp2: 0,
                    additionalProp3: 0
                }
            };

            await edificioService.createBuilding(nuevoEdificio);

            Swal.fire({
                icon: 'success',
                title: 'Edificio Creado',
                text: 'El edificio ha sido creado correctamente',
            });

            // Limpiar formulario y cerrar modal
            setNombre("");
            setAddress("");
            onClose();
            onEdificioCreated?.();

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo crear el edificio',
            });
            console.error("Error al crear el edificio:", error);
        } finally {
            setIsLoading(false);
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/60 bg-opacity-70 z-10 flex items-center justify-center">
            <div className="max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md font-bold"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>

                <h2 className="text-3xl font-bold text-center">
                    Crear Nuevo Edificio
                </h2>

                <form className="mt-5" onSubmit={handleSubmit}>
                    <div>
                        <h3 className="font-semibold mt-2">Nombre del Edificio</h3>
                        <input
                            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold mt-2">Dirección del Edificio</h3>
                        <input
                            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl disabled:bg-green-400"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creando...' : 'Crear Edificio'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalCrearEdificio;