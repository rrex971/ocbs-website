import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-logan-500 bg-cover p-5 rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-banana-mania-100 text-lg md:text-2xl font-head"><NavLink to="/" className="navbar-link hover:text-white-50 transition-colors duration-300 ease-in-out">o!CBS</NavLink></div>
        <ul className="flex md:space-x-8 space-x-3 text-sm md:text-lg font-head text-logan-800">
          <li><NavLink to="/info" className={({ isActive }) => (isActive ? "text-banana-mania-100 opacity-100" : "navbar-link opacity-50 hover:opacity-100 transition-opacity duration-300 transition-colors duration-300 ease-in-out")}>Info</NavLink></li>
          <li><NavLink to="/mappools" className={({ isActive }) => (isActive ? "text-carnation-pink-100 opacity-100" : "navbar-link opacity-50 hover:opacity-100 transition-opacity duration-300 transition-colors duration-300 ease-in-out")}>Mappools</NavLink></li>
          <li><NavLink to="/players" className={({ isActive }) => (isActive ? "text-banana-mania-100 opacity-100" : "navbar-link opacity-50 hover:opacity-100 transition-opacity duration-300 transition-colors duration-300 ease-in-out")}>Players</NavLink></li>
          <li><NavLink to="/staff" className={({ isActive }) => (isActive ? "text-banana-mania-100 opacity-100" : "navbar-link opacity-50 hover:opacity-100 transition-opacity duration-300 transition-colors duration-300 ease-in-out")}>Staff</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
