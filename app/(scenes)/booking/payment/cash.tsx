import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonF from '@/components/stylesFunny/ButtonF';
import { Colors } from '@/constants/Colors';

export default function CashPaymentScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thanh toán tiền mặt</Text>
        <Text style={styles.subtitle}>Thanh toán bằng tiền mặt khi đến nơi</Text>
      </View>

      <View style={styles.content}>
        <ButtonF
          title="Xác nhận"
          onPress={() => router.push('/booking/confirmation/success')}
          style={{ width: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
}); 