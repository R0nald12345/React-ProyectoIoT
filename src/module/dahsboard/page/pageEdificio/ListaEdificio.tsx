import { useEffect, useState } from "react";
import { Building } from "../../types/create.edificio";
import { edificioService } from "../../service/ServiceEdificios/edificioService";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";

const ListaEdificio = () => {
  const [edificios, setEdificios] = useState<Building[]>([]);
  //const navigate = useNavigate();

  useEffect(() => {
    fetchEdificios();
  }, []);

  const fetchEdificios = async () => {
    try {
      const data = await edificioService.getAllBuildings();
      setEdificios(data);
    } catch (error: any) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleEliminar = async (id: string) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar edificio?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    });

    if (confirm.isConfirmed) {
      try {
        await edificioService.deleteBuilding(id);
        Swal.fire("Eliminado", "El edificio fue eliminado", "success");
        fetchEdificios(); // recargar la lista
      } catch (error: any) {
        Swal.fire("Error", error.message, "error");
      }
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Listado de Edificios</h2>
        <button
          //onClick={() => navigate("/crear-edificio")}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <FiPlus className="mr-2" />
          Agregar
        </button>
      </div>

      {edificios.length === 0 ? (
        <p className="text-gray-500">No hay edificios registrados.</p>
      ) : (
        <div className="grid gap-4">
          {edificios.map((edificio) => (
            <div
              key={edificio.id}
              className="border rounded-lg p-4 shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{edificio.name}</h3>
                <p className="text-gray-600 text-sm">{edificio.address}</p>
              </div>
              <div className="flex space-x-4 text-xl">
                <button
                  //onClick={() => navigate(`/edificios/${edificio.id}`)}
                  title="Ver detalles"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <IoEyeSharp />
                </button>
                <button
                  onClick={() => handleEliminar(edificio.id)}
                  title="Eliminar"
                  className="text-red-600 hover:text-red-800"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaEdificio;
