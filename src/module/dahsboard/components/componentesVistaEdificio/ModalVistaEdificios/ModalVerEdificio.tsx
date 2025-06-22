import { useEffect, useState } from "react";
import { Building } from "../../../types/edificio.types";
import { IoMdClose } from "react-icons/io";
import GraficoSimulador from "./GraficoSimulador";

interface Props {
  open: boolean;
  onClose: () => void;
  edificio: Building;
}

const ModalVerEdificio = ({ open, onClose, edificio }: Props) => {
  
    
  const [running, setRunnig] = useState<boolean>(false);

  const [readings, setReadings] = useState<number[]>([]);

  const [timestamps, setTimestamps] = useState<string[]>([]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-10 flex items-center justify-center overflow-auto">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white bg-red-600 hover:bg-red-700 rounded-full p-1">
            <IoMdClose size={24} />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Información del Edificio</h2>

        <div className="space-y-2">
          <p><strong>Nombre:</strong> {edificio.name}</p>
          <p><strong>Tipo:</strong> {edificio.type}</p>
          <p><strong>Total Dispositivos:</strong> {edificio.devices_count}</p>
        </div>

        <div className="mt-4 space-y-4">
          {edificio.floors.map((floor, idx) => (
            <div key={idx} className="border p-3 rounded-md shadow-sm">
              <h3 className="font-semibold">Piso: {floor.number}</h3>
              {floor.rooms.map((room, rIdx) => (
                <div key={rIdx} className="ml-4 mt-2">
                  <p><strong>Habitación:</strong> {room.number}</p>
                  <p><strong>Dispositivos:</strong></p>
                  <ul className="list-disc ml-6">
                    {room.devices.map((device, dIdx) => (
                      <li key={dIdx}>
                        <span className="font-medium">{device.model}</span> ({device.type}) - Estado: {device.status}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => setRunnig(!running)}
            className={`font-semibold px-6 py-2 rounded-lg ${
              running 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {running ? 'DETENER SIMULACIÓN' : 'EMPEZAR SIMULADOR'}
          </button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-center mb-2">Consumo de Energía</h3>
          {/* Aquí podrías incrustar tu gráfico */}
          <div className="bg-gray-100 rounded-md p-4 text-center">
            {/* Reemplaza con un gráfico real */}
            <p>(Aquí va el gráfico de consumo...)</p>
            <GraficoSimulador readings={[]} timestamps={[]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerEdificio;