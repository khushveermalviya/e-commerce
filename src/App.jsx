import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TopologyViewer from './components/TopologyViewer';
import MetricsExplorer from './components/MetricsExplorer';
import AlertsPanel from './components/AlertsPanel';
import PredictionInsights from './components/PredictionInsights';
import AuditLog from './components/AuditLog';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={sidebarOpen} />
          <main className="flex-1 p-4 bg-gray-100 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/topology" element={<TopologyViewer />} />
              <Route path="/metrics" element={<MetricsExplorer />} />
              <Route path="/alerts" element={<AlertsPanel />} />
              <Route path="/predictions" element={<PredictionInsights />} />
              <Route path="/audit" element={<AuditLog />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;