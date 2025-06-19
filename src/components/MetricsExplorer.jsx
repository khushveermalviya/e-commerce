import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import { FaChartLine } from 'react-icons/fa';
import metricsData from '../data/metrics';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

function MetricsExplorer() {
  const data = {
    labels: metricsData.labels,
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: metricsData.cpu,
        borderColor: '#3b82f6',
        fill: false,
      },
      {
        label: 'Memory Usage (GB)',
        data: metricsData.memory,
        borderColor: '#ef4444',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top' } },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <FaChartLine className="text-blue-600" />
        <h2 className="text-xl font-bold">Metrics Explorer</h2>
      </div>
      <div className="h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default MetricsExplorer;