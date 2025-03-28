export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Vehicle {
  id: string;
  type: string;
  name: string;
  price: number;
  capacity: number;
  image: string;
}

export interface Booking {
  id: string;
  pickup: Location;
  dropoff: Location;
  vehicle: Vehicle;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  date: Date;
  price: number;
  distance: number;
  duration: number;
} 