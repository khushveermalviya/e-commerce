import React from 'react';
import { FaServer, FaBell, FaLightbulb } from 'react-icons/fa';
import AlertsPanel from './AlertsPanel';
import PredictionInsights from './PredictionInsights';

function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Metrics Widget */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2">
            <FaServer className="text-blue-600" />
            <h3 className="font-semibold">System Metrics</h3>
          </div>
          <p className="mt-2">CPU: 65% | Memory: 4.2GB/8GB</p>
          <p>Network: 120Mbps | Storage: 320GB/500GB</p>
        </div>
        {/* Alerts Widget */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2">
            <FaBell className="text-red-600" />
            <h3 className="font-semibold">Recent Alerts</h3>
          </div>
          <AlertsPanel limit={3} />
        </div>
        {/* Predictions Widget */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2">
            <FaLightbulb className="text-yellow-600" />
            <h3 className="font-semibold">Predictions</h3>
          </div>
          <PredictionInsights limit={2} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;