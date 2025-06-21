import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const GraficaLinea: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    // Datos de ejemplo - reemplaza esto con tu archivo JSON real
    const _rawData = [
      ['Country', 'Year', 'Income', 'Population'],
      ['Finland', 1950, 8000, 4000000],
      ['Finland', 1960, 12000, 4200000],
      ['Finland', 1970, 18000, 4600000],
      ['Finland', 1980, 25000, 4800000],
      ['Finland', 1990, 32000, 5000000],
      ['Finland', 2000, 38000, 5200000],
      ['Finland', 2010, 42000, 5400000],
      ['France', 1950, 9000, 42000000],
      ['France', 1960, 14000, 45000000],
      ['France', 1970, 22000, 50000000],
      ['France', 1980, 28000, 54000000],
      ['France', 1990, 35000, 57000000],
      ['France', 2000, 37000, 60000000],
      ['France', 2010, 37500, 63000000],
      ['Germany', 1950, 7000, 68000000],
      ['Germany', 1960, 13000, 72000000],
      ['Germany', 1970, 20000, 78000000],
      ['Germany', 1980, 26000, 78000000],
      ['Germany', 1990, 32000, 79000000],
      ['Germany', 2000, 40000, 82000000],
      ['Germany', 2010, 44000, 82000000],
      ['Iceland', 1950, 8500, 140000],
      ['Iceland', 1960, 15000, 180000],
      ['Iceland', 1970, 22000, 200000],
      ['Iceland', 1980, 30000, 230000],
      ['Iceland', 1990, 38000, 260000],
      ['Iceland', 2000, 42000, 280000],
      ['Iceland', 2010, 42200, 320000],
      ['Norway', 1950, 9500, 3300000],
      ['Norway', 1960, 16000, 3600000],
      ['Norway', 1970, 25000, 3900000],
      ['Norway', 1980, 35000, 4100000],
      ['Norway', 1990, 45000, 4200000],
      ['Norway', 2000, 55000, 4500000],
      ['Norway', 2010, 64000, 4900000],
      ['Poland', 1950, 4000, 25000000],
      ['Poland', 1960, 6000, 30000000],
      ['Poland', 1970, 8500, 33000000],
      ['Poland', 1980, 11000, 36000000],
      ['Poland', 1990, 8500, 38000000],
      ['Poland', 2000, 15000, 38500000],
      ['Poland', 2010, 25000, 38000000],
      ['Russia', 1950, 3500, 100000000],
      ['Russia', 1960, 5500, 120000000],
      ['Russia', 1970, 8000, 130000000],
      ['Russia', 1980, 10000, 140000000],
      ['Russia', 1990, 9000, 148000000],
      ['Russia', 2000, 12000, 146000000],
      ['Russia', 2010, 23000, 143000000],
      ['United Kingdom', 1950, 8500, 50000000],
      ['United Kingdom', 1960, 13500, 52000000],
      ['United Kingdom', 1970, 18000, 56000000],
      ['United Kingdom', 1980, 22000, 56000000],
      ['United Kingdom', 1990, 28000, 57000000],
      ['United Kingdom', 2000, 35000, 58000000],
      ['United Kingdom', 2010, 38000, 62000000]
    ];

    const countries = [
      'Finland',
      'France', 
      'Germany',
      'Iceland',
      'Norway',
      'Poland',
      'Russia',
      'United Kingdom'
    ];

    const datasetWithFilters: any[] = [];
    const seriesList: echarts.SeriesOption[] = [];

    countries.forEach(country => {
      const datasetId = 'dataset_' + country;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': country }
            ]
          }
        }
      });

      seriesList.push({
        type: 'line',
        datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: (params: any) => `${params.value[0]}: ${params.value[2]}`
        },
        labelLayout: { moveOverlap: 'shiftY' },
        emphasis: { focus: 'series' },
        encode: {
          x: 'Year',
          y: 'Income',
          label: ['Country', 'Income'],
          itemName: 'Year',
          tooltip: ['Income']
        }
      });
    });

    const option: echarts.EChartsOption = {
      animationDuration: 10000,
      dataset: [
        { id: 'dataset_raw', source: _rawData },
        ...datasetWithFilters
      ],
      title: { 
        text: 'Ingreso de Alemania y Francia desde 1950',
        left: 'center',
        textStyle: {
          color: '#333',
          fontSize: 18
        }
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        nameLocation: 'middle'
      },
      yAxis: {
        name: 'Ingreso'
      },
      grid: {
        right: 140,
        left: 80,
        top: 80,
        bottom: 60
      },
      series: seriesList
    };

    chart.setOption(option);

    // Cleanup
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div 
      ref={chartRef} 
      style={{ 
        width: '100%', 
        height: '325px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }} 
    />
  );
};

export default GraficaLinea;