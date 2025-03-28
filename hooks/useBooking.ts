import { useState } from 'react';

interface BookingData {
  pickup: string;
  dropoff: string;
  vehicleType: string;
  date: Date;
}

export const useBooking = () => {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createBooking = async (data: BookingData) => {
    setIsLoading(true);
    try {
      // Implement booking creation logic here
      setBookingData(data);
    } catch (error) {
      console.error('Booking creation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    bookingData,
    isLoading,
    createBooking,
  };
}; 