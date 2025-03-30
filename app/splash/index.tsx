import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { Colors } from '@/constants/Colors';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreenComponent: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    async function loadResources() {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        onFinish(); // Gọi callback để chuyển màn hình
        SplashScreen.hideAsync();
      }, 2000);
    }
    loadResources();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/splash-icon.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SplashScreenComponent;
