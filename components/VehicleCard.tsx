
import React from 'react';
import type { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={() => onSelectVehicle(vehicle)}
    >
      <img className="h-56 w-full object-cover" src={vehicle.imageUrl} alt={`${vehicle.make} ${vehicle.model}`} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{vehicle.make} {vehicle.model}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{vehicle.year}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-primary dark:text-primary-light">${vehicle.price.toLocaleString()}</span>
          <span className="px-3 py-1 text-sm font-semibold text-white bg-secondary dark:bg-gray-700 rounded-full">{vehicle.transmission}</span>
        </div>
      </div>
    </div>
  );
};
