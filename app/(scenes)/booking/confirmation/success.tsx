import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import ButtonF from '@/components/stylesFunny/ButtonF';
import { Colors } from '@/constants/Colors';

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đặt xe thành công</Text>
        <Text style={styles.subtitle}>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</Text>
      </View>

      <View style={styles.content}>
        <ButtonF
          title="Về trang chủ"
          onPress={() => router.push('/(tabs)/dashboard')}
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