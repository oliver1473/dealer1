
import React from 'react';
import type { Vehicle } from '../types';
import { VehicleCard } from './VehicleCard';

interface VehicleListProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleList: React.FC<VehicleListProps> = ({ vehicles, onSelectVehicle }) => {
  return (
    <section id="vehicles" className="bg-light dark:bg-secondary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Novedades</h2>
        {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} onSelectVehicle={onSelectVehicle} />
            ))}
            </div>
        ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 text-xl">No se encontraron vehículos con los criterios seleccionados.</p>
        )}
      </div>
    </section>
  );
};
