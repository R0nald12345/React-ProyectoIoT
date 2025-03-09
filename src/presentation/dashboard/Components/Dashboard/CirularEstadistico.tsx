import React, { useRef, useEffect } from 'react';
import * as Chart from 'chart.js';
import { ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los elementos necesarios
Chart.Chart.register(ArcElement, Tooltip, Legend);

const CircularEstadistico: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destruir el gráfico anterior si existe
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Definición de datos similar al ejemplo de la documentación
        const data = {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        };

        // Configuración del gráfico
        const config: Chart.ChartConfiguration = {
          type: 'doughnut',
          data: data,
          options: {
            responsive: true,
          }
        };

        // Crear la instancia del gráfico y guardar la referencia
        chartInstanceRef.current = new Chart.Chart(ctx, config);
      }

    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className=" w-full h-[280px] p-4 rounded-xl bg-white/80">
      <h2 className="text-lg font-bold mb-2 text-black">Gráfico de Barras</h2>
      <div className='flex justify-center w-full md:h-[200px] bg-red-900'>
        <canvas ref={chartRef} style={{width:'100%', height:'100%'}}></canvas>

      </div>
    </div>
  );
}

export default CircularEstadistico;