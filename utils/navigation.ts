import { router } from 'expo-router';

export const navigation = {
  // Auth navigation
  goToLogin: () => router.push('/(auth)/login'),
  goToRegister: () => router.push('/(auth)/register'),
  goToVerify: () => router.push('/(auth)/verify'),

  // Tab navigation
  goToHome: () => router.push('/(tabs)/home'),
  goToBooking: () => router.push('/(tabs)/booking'),
  goToRides: () => router.push('/(tabs)/rides'),
  goToProfile: () => router.push('/(tabs)/profile'),

  // Booking navigation
  goToLocation: () => router.push('/booking/location'),
  goToVehicle: () => router.push('/booking/vehicle'),
  goToConfirm: () => router.push('/booking/confirm'),

  // Rides navigation
  goToRideDetails: (id: string) => router.push(`/rides/${id}`),
  goToActiveRide: () => router.push('/rides/active'),

  // Common navigation
  goBack: () => router.back(),
  goToRoot: () => router.replace('/'),
}; 