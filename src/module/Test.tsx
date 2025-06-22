import ReactECharts from 'echarts-for-react';

const Test = () => {
  return (
    <>

<div className="min-h-screen bg-white">
  {/* Header */}
  <header className="bg-gray-50 py-4 shadow-md">
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800">Energy Dashboard</h1>
    </div>
  </header>

  {/* KPI Metrics */}
  <section className="container mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700">Consumption</h2>
      <p className="text-2xl font-bold text-blue-600">475.8 kWh</p>
      <p className="text-sm text-gray-500">Current Consumption</p>
    </div>
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700">Efficiency</h2>
      <p className="text-2xl font-bold text-green-600">45%</p>
      <p className="text-sm text-gray-500">Health Percentage</p>
    </div>
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700">Cost</h2>
      <p className="text-2xl font-bold text-amber-500">$1250</p>
      <p className="text-sm text-gray-500">Estimated Monthly Cost</p>
    </div>
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700">Alerts</h2>
      <p className="text-2xl font-bold text-red-600">3</p>
      <p className="text-sm text-gray-500">Critical Alerts</p>
    </div>
  </section>

  {/* Charts */}
  <section className="container mx-auto mt-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
    {/* Line Chart */}
    <div className="bg-gray-50 rounded-lg shadow-md p-4 lg:col-span-2">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Energy Consumption Trend</h2>
      <ReactECharts
        option={{
          xAxis: {
            type: 'category',
            data: ['Oct 25 14:00', 'Oct 25 15:00', 'Oct 25 16:00', 'Oct 26 09:00'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [450.5, 480.2, 475.8, 350.1],
              type: 'line',
              color: '#3b82f6',
            },
          ],
          backgroundColor: 'transparent',
        }}
        style={{ height: '300px' }}
      />
    </div>

    {/* Bar Chart */}
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Average Hourly Consumption</h2>
      <ReactECharts
        option={{
          xAxis: {
            type: 'category',
            data: [9, 14, 15, 16],
            name: 'Hour',
          },
          yAxis: {
            type: 'value',
            name: 'Consumption'
          },
          series: [
            {
              data: [350.1, 450.5, 480.2, 475.8],
              type: 'bar',
              color: '#16a34a',
            },
          ],
          backgroundColor: 'transparent',
        }}
        style={{ height: '300px' }}
      />
    </div>

    {/* Doughnut Chart */}
    <div className="bg-gray-50 rounded-lg shadow-md p-4 lg:col-span-1">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Temperature Correlation</h2>
      <ReactECharts
        option={{
          series: [
            {
              name: 'Temperature Correlation',
              type: 'pie',
              radius: ['45%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 22.5, name: '22.5°C', itemStyle: { color: '#f59e0b' } },
                { value: 23, name: '23°C', itemStyle: { color: '#dc2626' } },
                { value: 22.8, name: '22.8°C', itemStyle: { color: '#eab308' } },
                { value: 19, name: '19°C', itemStyle: { color: '#6b7280' } },
              ],
            },
          ],
          backgroundColor: 'transparent',
        }}
        style={{ height: '300px' }}
      />
    </div>
  </section>

  {/* Status/Alerts Panel */}
  <section className="container mx-auto mt-8 px-4">
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-2">Alerts</h2>
      <ul>
        <li className="text-sm text-red-600">
          Asset health is critically low (45%). Immediate inspection and maintenance required.
        </li>
        <li className="text-sm text-red-600">
          High failure probability (78.5%) within 30 days. Schedule immediate maintenance.
        </li>
        <li className="text-sm text-red-600">
          Active alert: ERR_VIB_HIGH. Fallo inminente de rodamientos en el motor del ventilador.
        </li>
      </ul>
    </div>
  </section>
</div>    
    </>
  )
}

export default Test
