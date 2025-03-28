import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonF from '@/components/stylesFunny/ButtonF';

export default function PaymentIndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thanh toán</Text>
        <Text style={styles.subtitle}>Chọn phương thức thanh toán</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => router.push('/booking/payment/cash')}
        >
          <Text style={styles.paymentOptionText}>Thanh toán tiền mặt</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => router.push('/booking/payment/card')}
        >
          <Text style={styles.paymentOptionText}>Thanh toán thẻ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    color: '#666666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  paymentOption: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
  },
  paymentOptionText: {
    fontSize: 16,
    color: '#000000',
  },
}); 