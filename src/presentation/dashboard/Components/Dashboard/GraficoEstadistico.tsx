import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes que usa Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Definir los datos del gráfico
const data = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
  datasets: [
    {
      label: "Ventas Mensuales",
      data: [65, 59, 80, 81, 56, 55, 40], // Datos del gráfico
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4, // Suaviza la curva
    },
  ],
};

// Opciones del gráfico
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Ocultar líneas de la cuadrícula en X
      },
    },
    y: {
      grid: {
        display: true, // Mostrar líneas de la cuadrícula en Y
      },
    },
  },
};

const GraficoEstadistico: React.FC = () => {
  return (
    <div className="bg-white/80 text-black p-4 shadow-md rounded-xl ">
      <h2 className="text-lg font-bold mb-2">Gráfico de Ventas</h2>
      <div className="w-full h-[200px]">
        <Line data={data} options={{
            ...options,
            maintainAspectRatio: false, // Importante
            responsive: true,
          }}style={{width:'100%', height: '100%'}}/>

      </div>
    </div>
  );
};

export default GraficoEstadistico;
