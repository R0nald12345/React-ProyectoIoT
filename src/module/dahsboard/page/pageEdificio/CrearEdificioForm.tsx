import { useState } from "react";
import { CreateBuildingDTO } from "../../types/create.edificio";
//import { edificioService } from "../../services/edificioService";
import Swal from "sweetalert2";
import { edificioService } from "../../service/ServiceEdificios/edificioService";

const CrearEdificioForm = () => {
  const [formData, setFormData] = useState<CreateBuildingDTO>({
    name: "",
    address: "",
    geolocation: {
      additionalProp1: 0,
      additionalProp2: 0,
      additionalProp3: 0
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await edificioService.createBuilding(formData);
      console.log("Edificio creado:", response);
      Swal.fire("¡Éxito!", "Edificio creado correctamente", "success");
      // Limpiar el formulario
      setFormData({
        name: "",
        address: "",
        geolocation: {
          additionalProp1: 0,
          additionalProp2: 0,
          additionalProp3: 0
        }
      });
    } catch (error: any) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow p-6 rounded-lg mt-10 space-y-4">
      <h2 className="text-xl font-bold mb-4">Crear Edificio</h2>

      <div>
        <label className="block font-medium">Nombre del Edificio</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Dirección</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-sm">Latitud</label>
          <input
            type="number"
            value={formData.geolocation.additionalProp1}
            onChange={(e) =>
              setFormData(prev => ({
                ...prev,
                geolocation: { ...prev.geolocation, additionalProp1: parseFloat(e.target.value) }
              }))
            }
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Longitud</label>
          <input
            type="number"
            value={formData.geolocation.additionalProp2}
            onChange={(e) =>
              setFormData(prev => ({
                ...prev,
                geolocation: { ...prev.geolocation, additionalProp2: parseFloat(e.target.value) }
              }))
            }
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Altitud</label>
          <input
            type="number"
            value={formData.geolocation.additionalProp3}
            onChange={(e) =>
              setFormData(prev => ({
                ...prev,
                geolocation: { ...prev.geolocation, additionalProp3: parseFloat(e.target.value) }
              }))
            }
            className="w-full border px-2 py-1 rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Crear Edificio
      </button>
    </form>
  );
};

export default CrearEdificioForm;
