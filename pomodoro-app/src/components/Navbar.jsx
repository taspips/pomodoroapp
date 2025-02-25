// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon, Cog6ToothIcon, ChartBarIcon, HomeIcon } from '@heroicons/react/24/solid';

const Navbar = ({ darkMode, toggleTheme }) => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-lg fixed top-0 w-full z-50">
      <div className="text-xl font-bold text-gray-800 dark:text-gray-200">Pomodoro App</div>
      <div className="flex gap-4">
        <Link to="/">
          <HomeIcon className={`h-6 w-6 ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`} />
        </Link>
        <Link to="/history">
          <ChartBarIcon className={`h-6 w-6 ${location.pathname === '/history' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`} />
        </Link>
        <Link to="/settings">
          <Cog6ToothIcon className={`h-6 w-6 ${location.pathname === '/settings' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`} />
        </Link>
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
