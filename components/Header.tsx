
import React from 'react';
import { SunIcon, MoonIcon, FacebookIcon, TwitterIcon, InstagramIcon } from './Icons';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white/80 dark:bg-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary dark:text-primary-light">
              AutoHub
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#vehicles" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Vehículos</a>
              <a href="#gallery" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Galería</a>
              <a href="#register" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Registro</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
          </div>
          <div className="flex items-center">
             <div className="hidden sm:flex items-center space-x-4 mr-4">
                <a href="#" className="text-gray-500 hover:text-primary-dark dark:text-gray-400 dark:hover:text-primary-light transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-primary-dark dark:text-gray-400 dark:hover:text-primary-light transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-primary-dark dark:text-gray-400 dark:hover:text-primary-light transition-colors"><InstagramIcon className="w-5 h-5" /></a>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-dark focus:ring-primary"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
