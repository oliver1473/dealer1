
import React from 'react';
import type { Filters } from '../types';
import { MAX_PRICE } from '../constants';

interface SearchFormProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  makes: string[];
  models: string[];
}

export const SearchForm: React.FC<SearchFormProps> = ({ filters, onFilterChange, makes, models }) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: name === 'maxPrice' ? Number(value) : value });
  };

  return (
    <section className="bg-light dark:bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg -mt-32 relative z-20">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Busca tu Próximo Auto</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Marca</label>
              <select id="make" name="make" value={filters.make} onChange={handleInputChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary focus:border-primary rounded-md">
                <option value="">Todas</option>
                {makes.map(make => <option key={make} value={make}>{make}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Modelo</label>
              <select id="model" name="model" value={filters.model} onChange={handleInputChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary focus:border-primary rounded-md">
                <option value="">Todos</option>
                {models.map(model => <option key={model} value={model}>{model}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Transmisión</label>
              <select id="transmission" name="transmission" value={filters.transmission} onChange={handleInputChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-primary focus:border-primary rounded-md">
                <option value="">Cualquiera</option>
                <option value="Automatic">Automática</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Precio Máximo: ${filters.maxPrice.toLocaleString()}</label>
              <input type="range" id="maxPrice" name="maxPrice" min="0" max={MAX_PRICE} step="1000" value={filters.maxPrice} onChange={handleInputChange} className="mt-2 w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
