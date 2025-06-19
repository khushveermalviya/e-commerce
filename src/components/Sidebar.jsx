import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSitemap, FaChartLine, FaBell, FaLightbulb, FaHistory } from 'react-icons/fa';

function Sidebar({ isOpen }) {
  const links = [
    { to: '/', icon: <FaHome />, label: 'Dashboard' },
    { to: '/topology', icon: <FaSitemap />, label: 'Topology' },
    { to: '/metrics', icon: <FaChartLine />, label: 'Metrics' },
    { to: '/alerts', icon: <FaBell />, label: 'Alerts' },
    { to: '/predictions', icon: <FaLightbulb />, label: 'Predictions' },
    { to: '/audit', icon: <FaHistory />, label: 'Audit Log' },
  ];

  return (
    <aside
      className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
    >
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded"
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar;