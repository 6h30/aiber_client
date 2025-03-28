import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting location permission:', error);
    return false;
  }
};

export const requestNotificationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return false;
  }
};

export const checkLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.getForegroundPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error checking location permission:', error);
    return false;
  }
};

export const checkNotificationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Notifications.getPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error checking notification permission:', error);
    return false;
  }
};

// export const openLocationSettings = async (): Promise<void> => {
//   try {
//     await Location.openLocationSettingsAsync();
//   } catch (error) {
//     console.error('Error opening location settings:', error);
//   }
// };

// export const openNotificationSettings = async (): Promise<void> => {
//   try {
//     await Notifications.openNotificationSettingsAsync();
//   } catch (error) {
//     console.error('Error opening notification settings:', error);
//   }
// }; 