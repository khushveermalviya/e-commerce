import React from 'react';
import { FaHistory } from 'react-icons/fa';
import auditData from '../data/audit';

function AuditLog() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <FaHistory className="text-blue-600" />
        <h2 className="text-xl font-bold">Audit Log</h2>
      </div>
      <ul className="space-y-2">
        {auditData.map((log) => (
          <li key={log.id} className="p-2 bg-gray-100 rounded">
            <p className="font-semibold">{log.action}</p>
            <p className="text-sm text-gray-600">By: {log.user} | {log.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuditLog;