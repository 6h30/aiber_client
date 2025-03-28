import { api } from './api';

export const ridesService = {
  getActiveRide: async () => {
    return api.get('/rides/active');
  },

  getRideHistory: async () => {
    return api.get('/rides/history');
  },

  getRideDetails: async (id: string) => {
    return api.get(`/rides/${id}`);
  },

  updateRideStatus: async (id: string, status: string) => {
    return api.put(`/rides/${id}/status`, { status });
  },
}; 