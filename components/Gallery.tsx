
import React from 'react';

const galleryImages = [
    { src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'Dealership exterior' },
    { src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'Showroom floor' },
    { src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'Service center' },
    { src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'Happy customer' },
    { src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'Detailing bay' },
    { src: 'https://picsum.photos/seed/gallery6/600/400', alt: 'Team photo' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-white dark:bg-dark py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Nuestra Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
