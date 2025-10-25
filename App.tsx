
import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchForm } from './components/SearchForm';
import { VehicleList } from './components/VehicleList';
import { VehicleModal } from './components/VehicleModal';
import { Gallery } from './components/Gallery';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { VEHICLE_DATA, MAX_PRICE } from './constants';
import type { Vehicle, Filters } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [filters, setFilters] = useState<Filters>({
    make: '',
    model: '',
    transmission: '',
    maxPrice: MAX_PRICE,
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
  };
  
  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const makes = useMemo(() => [...new Set(VEHICLE_DATA.map(v => v.make))], []);
  const models = useMemo(() => {
      const filteredByMake = filters.make ? VEHICLE_DATA.filter(v => v.make === filters.make) : VEHICLE_DATA;
      return [...new Set(filteredByMake.map(v => v.model))];
  }, [filters.make]);

  const filteredVehicles = useMemo(() => {
    return VEHICLE_DATA.filter(vehicle => {
      return (
        (filters.make === '' || vehicle.make === filters.make) &&
        (filters.model === '' || vehicle.model === filters.model) &&
        (filters.transmission === '' || vehicle.transmission === filters.transmission) &&
        (vehicle.price <= filters.maxPrice)
      );
    });
  }, [filters]);

  return (
    <div className="bg-light dark:bg-dark min-h-screen font-sans">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <SearchForm filters={filters} onFilterChange={handleFilterChange} makes={makes} models={models} />
        <VehicleList vehicles={filteredVehicles} onSelectVehicle={handleSelectVehicle} />
        <Gallery />
        <RegistrationForm />
      </main>
      <Footer />
      <VehicleModal vehicle={selectedVehicle} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
