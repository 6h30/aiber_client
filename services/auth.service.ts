import { api } from './api';

export const authService = {
  login: async (email: string, password: string) => {
    return api.post('/auth/login', { email, password });
  },

  register: async (email: string, password: string, name: string) => {
    return api.post('/auth/register', { email, password, name });
  },

  verify: async (token: string) => {
    return api.post('/auth/verify', { token });
  },

//   logout: async () => {
//     return api.post('/auth/logout');
//   },
}; 