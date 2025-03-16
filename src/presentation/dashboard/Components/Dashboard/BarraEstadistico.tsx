import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar módulos de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Definir colores
const COLORS = {
  red: "rgba(255, 99, 132, 0.5)",
  blue: "rgba(54, 162, 235, 0.5)",
  green: "rgba(75, 192, 192, 0.5)",
};

// Datos del gráfico
const data = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
  datasets: [
    {
      label: "Dataset 1",
      data: [50, 70, 90, 60, 80, 100, 40],
      backgroundColor: COLORS.red,
      stack: "Grupo 1",
    },
    {
      label: "Dataset 2",
      data: [30, 50, 40, 70, 60, 80, 90],
      backgroundColor: COLORS.blue,
      stack: "Grupo 1",
    },
    {
      label: "Dataset 3",
      data: [20, 40, 60, 80, 100, 50, 70],
      backgroundColor: COLORS.green,
      stack: "Grupo 2",
    },
  ],
};

// Opciones del gráfico
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Gráfico de Barras Apiladas",
      font: {
        size: 18,
      },
    },
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      stacked: true, // Agrupar barras en el mismo eje X
    },
    y: {
      stacked: true, // Apilar valores en el mismo eje Y
    },
  },
};

const BarraEstadistico: React.FC = () => {
  return (
    <div className="bg-white/80 text-black p-4  rounded-md border-gray-600 shadow-2xl w-full h-full">
      <h2 className="text-lg font-bold mb-2">Gráfico de Barras</h2>
      <div className="w-full h-[380px]">
        <Bar data={data}  options={{
            ...options,
            maintainAspectRatio: false, // Importante
            responsive: true,
          }} style={{ 
            width: '100%', 
            height: '100%' 
          }}  />

      </div>
    </div>
  );
};

export default BarraEstadistico;
