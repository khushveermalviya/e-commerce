import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import socket from '../socket';
import alertsData from '../data/alerts';

function AlertsPanel({ limit }) {
  const [alerts, setAlerts] = useState(alertsData);

  useEffect(() => {
    socket.on('newAlert', (alert) => {
      setAlerts((prev) => [alert, ...prev].slice(0, limit || 10));
    });

    return () => socket.off('newAlert');
  }, [limit]);

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <FaBell className="text-red-600" />
        <h2 className="text-xl font-bold">Alerts</h2>
      </div>
      <ul className="space-y-2">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={`p-2 rounded ${
              alert.severity === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
            }`}
          >
            <p className="font-semibold">{alert.message}</p>
            <p className="text-sm text-gray-600">{alert.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertsPanel;