
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">AutoHub</h3>
            <p className="text-gray-400">Tu concesionario de confianza para autos seminuevos de calidad. Visítanos y encuentra tu próximo vehículo.</p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span>contacto@autohub.com</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                <span>(555) 123-4567</span>
              </li>
               <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                <span>123 Auto Street, Car City, 12345</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
             <h3 className="text-xl font-bold text-white mb-4">Ubicación</h3>
             <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-400">Mapa de ubicación</p>
             </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pre-Owned AutoHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
