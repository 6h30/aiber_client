import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonF from '@/components/stylesFunny/ButtonF';
import { Colors } from '@/constants/Colors';

export default function ClientScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ButtonF
          bgColor={Colors.background.brand}
          title="Start"
          onPress={() => router.push('/booking')}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  button: {
    width: 200,
  },
}); 