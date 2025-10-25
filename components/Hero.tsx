
import React, { useState, useEffect, useCallback } from 'react';

const images = [
  'https://picsum.photos/seed/hero1/1920/1080',
  'https://picsum.photos/seed/hero2/1920/1080',
  'https://picsum.photos/seed/hero3/1920/1080',
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in">Encuentra el auto de tus sueños</h1>
        <p className="text-lg md:text-2xl max-w-3xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Calidad, Confianza y los Mejores Precios en Vehículos Seminuevos.
        </p>
      </div>
    </section>
  );
};
