import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  BOOKING_DATA: '@booking_data',
  RIDE_DATA: '@ride_data',
};

export const storage = {
  // Lưu token
  setToken: async (token: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  },

  // Lấy token
  getToken: async (): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  },

  // Lưu thông tin người dùng
  setUserData: async (userData: any): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  },

  // Lấy thông tin người dùng
  getUserData: async (): Promise<any | null> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  // Lưu dữ liệu đặt xe
  setBookingData: async (bookingData: any): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.BOOKING_DATA, JSON.stringify(bookingData));
    } catch (error) {
      console.error('Error saving booking data:', error);
    }
  },

  // Lấy dữ liệu đặt xe
  getBookingData: async (): Promise<any | null> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.BOOKING_DATA);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting booking data:', error);
      return null;
    }
  },

  // Lưu dữ liệu chuyến đi
  setRideData: async (rideData: any): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.RIDE_DATA, JSON.stringify(rideData));
    } catch (error) {
      console.error('Error saving ride data:', error);
    }
  },

  // Lấy dữ liệu chuyến đi
  getRideData: async (): Promise<any | null> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.RIDE_DATA);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting ride data:', error);
      return null;
    }
  },

  // Xóa tất cả dữ liệu
  clearAll: async (): Promise<void> => {
    try {
      await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
}; 