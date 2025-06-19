import React from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Predictive Infrastructure Manager</h1>
      <button onClick={toggleSidebar} className="md:hidden">
        <FaBars size={24} />
      </button>
    </nav>
  );
}

export default Navbar;