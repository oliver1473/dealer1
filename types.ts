
export type Transmission = 'Automatic' | 'Manual';

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  transmission: Transmission;
  imageUrl: string;
  gallery: string[];
  description: string;
}

export interface Filters {
  make: string;
  model: string;
  transmission: string;
  maxPrice: number;
}
