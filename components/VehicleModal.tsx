
import React, { useState } from 'react';
import type { Vehicle } from '../types';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose }) => {
  const [mainImage, setMainImage] = useState(vehicle?.imageUrl || '');

  if (!vehicle) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <img src={mainImage} alt="Main view" className="w-full h-auto object-cover rounded-lg shadow-md mb-4" />
                    <div className="flex space-x-2">
                        {vehicle.gallery.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className={`w-1/3 h-24 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                                onMouseEnter={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{vehicle.make} {vehicle.model}</h2>
                    <p className="text-md text-gray-500 dark:text-gray-400 mb-4">{vehicle.year}</p>
                    <p className="text-3xl font-semibold text-primary dark:text-primary-light mb-6">${vehicle.price.toLocaleString()}</p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{vehicle.description}</p>
                    
                    <div className="space-y-2 text-gray-800 dark:text-gray-200">
                        <p><strong>Transmisión:</strong> {vehicle.transmission}</p>
                    </div>

                    <div className="mt-8 bg-blue-50 dark:bg-blue-900/50 p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-2">¿Interesado? ¡Contáctanos!</h3>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">Teléfono: (555) 123-4567</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
