import { api } from './api';

export const bookingService = {
  createBooking: async (data: {
    pickup: string;
    dropoff: string;
    vehicleType: string;
    date: Date;
  }) => {
    return api.post('/bookings', data);
  },

  getBooking: async (id: string) => {
    return api.get(`/bookings/${id}`);
  },

  cancelBooking: async (id: string) => {
    return api.delete(`/bookings/${id}`);
  },

  getBookingHistory: async () => {
    return api.get('/bookings/history');
  },
}; 