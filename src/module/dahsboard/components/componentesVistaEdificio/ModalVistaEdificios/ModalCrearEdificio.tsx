import { useState } from "react";
import Swal from "sweetalert2";
import { edificioService } from "../../../service/ServiceEdificios/edificioService";
import { CreateBuildingDTO } from "../../../types/create.edificio";

interface Props {
    open: boolean;
    onClose: () => void;
    onEdificioCreated?: () => void;
}

const ModalCrearEdificio = ({ open, onClose, onEdificioCreated }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState<"residential" | "commercial">("residential");
    const [numeroPiso, setNumeroPiso] = useState(0);
    const [numeroHabitacion, setNumeroHabitacion] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nombre.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del edificio es obligatorio',
            });
            return;
        }

        try {
            setIsLoading(true);

            const nuevoEdificio :CreateBuildingDTO = {
                name: nombre,
                type: tipo,
                floors: [
                    {
                        number: numeroPiso,
                        rooms: [
                            {
                                number: numeroHabitacion,
                                devices: [
                                    {
                                        id: "device-" + Date.now(),
                                        type: "power_meter",
                                        status: "active",
                                        model: "PM-2000",
                                        update_interval: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            await edificioService.createBuilding(nuevoEdificio);

            Swal.fire({
                icon: 'success',
                title: 'Edificio Creado',
                text: 'El edificio ha sido creado correctamente',
            });

            // Limpiar formulario y cerrar modal
            setNombre("");
            setTipo("residential");
            setNumeroPiso(0);
            setNumeroHabitacion(0);
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
                        <h3 className="font-semibold mt-2">Tipo de Edificio</h3>
                        <select
                            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value as "residential" | "commercial")}
                            disabled={isLoading}
                        >
                            <option value="residential">Residencial</option>
                            <option value="commercial">Comercial</option>
                        </select>
                    </div>

                    <div>
                        <h3 className="font-semibold mt-2">Número de Piso</h3>
                        <input
                            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                            type="number"
                            min="0"
                            value={numeroPiso}
                            onChange={(e) => setNumeroPiso(Number(e.target.value))}
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold mt-2">Número de Habitación</h3>
                        <input
                            className="rounded-md border-2 border-gray-400 w-full p-2 mt-1 outline-none"
                            type="number"
                            min="0"
                            value={numeroHabitacion}
                            onChange={(e) => setNumeroHabitacion(Number(e.target.value))}
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