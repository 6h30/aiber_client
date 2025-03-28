import { Location, Vehicle } from './booking.types';

export interface Driver {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  rating: number;
  vehicle: Vehicle;
}

export interface Ride {
  id: string;
  bookingId: string;
  driver: Driver;
  pickup: Location;
  dropoff: Location;
  status: 'waiting' | 'picked_up' | 'in_progress' | 'completed' | 'cancelled';
  startTime?: Date;
  endTime?: Date;
  currentLocation?: Location;
  estimatedTime?: number;
  price: number;
} 