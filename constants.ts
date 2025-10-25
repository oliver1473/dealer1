
import type { Vehicle } from './types';

export const VEHICLE_DATA: Vehicle[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 25000,
    transmission: 'Automatic',
    imageUrl: 'https://picsum.photos/seed/car1/800/600',
    gallery: [
      'https://picsum.photos/seed/car1-a/800/600',
      'https://picsum.photos/seed/car1-b/800/600',
      'https://picsum.photos/seed/car1-c/800/600',
    ],
    description: 'A reliable and fuel-efficient sedan, perfect for families and daily commuting. Low mileage and in excellent condition.'
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2020,
    price: 22000,
    transmission: 'Automatic',
    imageUrl: 'https://picsum.photos/seed/car2/800/600',
    gallery: [
      'https://picsum.photos/seed/car2-a/800/600',
      'https://picsum.photos/seed/car2-b/800/600',
      'https://picsum.photos/seed/car2-c/800/600',
    ],
    description: 'Sporty and fun to drive, the Civic offers a great blend of performance and economy. Comes with modern tech features.'
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2019,
    price: 35000,
    transmission: 'Manual',
    imageUrl: 'https://picsum.photos/seed/car3/800/600',
    gallery: [
      'https://picsum.photos/seed/car3-a/800/600',
      'https://picsum.photos/seed/car3-b/800/600',
      'https://picsum.photos/seed/car3-c/800/600',
    ],
    description: 'Iconic American muscle car with a powerful V8 engine. A true enthusiast\'s car with a manual gearbox.'
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Silverado',
    year: 2022,
    price: 45000,
    transmission: 'Automatic',
    imageUrl: 'https://picsum.photos/seed/car4/800/600',
    gallery: [
      'https://picsum.photos/seed/car4-a/800/600',
      'https://picsum.photos/seed/car4-b/800/600',
      'https://picsum.photos/seed/car4-c/800/600',
    ],
    description: 'A rugged and capable pickup truck. Ready for work or weekend adventures. Includes a spacious crew cab.'
  },
  {
    id: 5,
    make: 'Nissan',
    model: 'Rogue',
    year: 2021,
    price: 27000,
    transmission: 'Automatic',
    imageUrl: 'https://picsum.photos/seed/car5/800/600',
    gallery: [
      'https://picsum.photos/seed/car5-a/800/600',
      'https://picsum.photos/seed/car5-b/800/600',
      'https://picsum.photos/seed/car5-c/800/600',
    ],
    description: 'Comfortable and versatile SUV with plenty of cargo space. Equipped with advanced safety features.'
  },
  {
    id: 6,
    make: 'Jeep',
    model: 'Wrangler',
    year: 2018,
    price: 32000,
    transmission: 'Manual',
    imageUrl: 'https://picsum.photos/seed/car6/800/600',
    gallery: [
      'https://picsum.photos/seed/car6-a/800/600',
      'https://picsum.photos/seed/car6-b/800/600',
      'https://picsum.photos/seed/car6-c/800/600',
    ],
    description: 'The ultimate off-road vehicle. Removable top and doors for an open-air experience. Ready for any trail.'
  },
  {
    id: 7,
    make: 'BMW',
    model: '3 Series',
    year: 2020,
    price: 38000,
    transmission: 'Automatic',
    imageUrl: 'https://picsum.photos/seed/car7/800/600',
    gallery: [
      'https://picsum.photos/seed/car7-a/800/600',
      'https://picsum.photos/seed/car7-b/800/600',
      'https://picsum.photos/seed/car7-c/800/600',
    ],
    description: 'Luxury sport sedan that delivers a thrilling driving experience. Premium interior with top-of-the-line technology.'
  },
  {
    id: 8,
    make: 'Toyota',
    model: 'RAV4',
    year: 2022,
    price: 30000,
    transmission: 'Automatic',
    imageUrl: 'https://picsum.photos/seed/car8/800/600',
    gallery: [
      'https://picsum.photos/seed/car8-a/800/600',
      'https://picsum.photos/seed/car8-b/800/600',
      'https://picsum.photos/seed/car8-c/800/600',
    ],
    description: 'A best-selling compact SUV known for its reliability and practicality. All-wheel drive for all-weather confidence.'
  }
];

export const MAX_PRICE = 50000;
