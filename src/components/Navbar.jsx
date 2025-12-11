import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginButton from './LoginButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-logan-500 bg-cover p-4 md:p-5 rounded-b-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <motion.div
            className="text-banana-mania-100 text-lg md:text-2xl font-head"
            whileHover={{ rotate: -4, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
          >
            <NavLink to="/" className="hover:text-banana-mania-50 transition-colors duration-300 ease-in-out">
              o!CBS
            </NavLink>
          </motion.div>

          <div className="flex items-center md:hidden space-x-4">
            <button
              id="menu-button"
              className="text-banana-mania-100 focus:outline-none focus:ring-2 focus:ring-banana-mania-50 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="md:hidden">
              <LoginButton />
            </div>
          </div>
        </div>

        <ul
          className={`${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          } md:max-h-none md:opacity-100 transition-all duration-500 ease-out-in overflow-hidden md:flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 justify-start md:justify-end items-start md:items-center text-sm md:text-lg lg:text-xl font-head text-logan-800 w-full md:w-auto mt-4 md:mt-0`}
        >
          {[
            { to: '/info', label: 'Info' },
            { to: '/rules', label: 'Rules' },
            { to: '/mappools', label: 'Mappools' },
            { to: '/players', label: 'Players' },
            { to: '/staff', label: 'Staff' },
          ].map((item) => (
            <motion.li
              key={item.to}
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-banana-mania-100 opacity-100'
                    : 'navbar-link opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                }
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
          <li className="hidden md:block">
            <LoginButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
