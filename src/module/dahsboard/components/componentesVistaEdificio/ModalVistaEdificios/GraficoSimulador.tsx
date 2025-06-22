// src/components/graficos/GraficoEnergia.tsx

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface Props {
  readings: number[]; // valores en kW (por ejemplo)
  timestamps: string[]; // fechas u horas (formato HH:mm:ss)
}

const GraficoSimulador: React.FC<Props> = ({ readings, timestamps }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      title: {
        text: 'Consumo de Energía',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: timestamps,
      },
      yAxis: {
        type: 'value',
        name: 'kW',
      },
      series: [
        {
          data: readings,
          type: 'line',
          smooth: true,
          name: 'Consumo de Energía',
          lineStyle: {
            width: 3,
          },
          itemStyle: {
            color: '#f97316',
          },
        },
      ],
    };

    chart.setOption(option);

    // Redimensiona automáticamente
    const resizeObserver = new ResizeObserver(() => chart.resize());
    resizeObserver.observe(chartRef.current);

    return () => {
      chart.dispose();
    };
  }, [readings, timestamps]);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
};

export default GraficoSimulador;
