import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/Button';
import { theme } from '@/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ThemedText style={styles.title}>Chào mừng đến với Aiber</ThemedText>
          <ThemedText style={styles.subtitle}>
            Ứng dụng đặt xe thông minh, nhanh chóng và an toàn
          </ThemedText>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <ThemedText style={styles.cardTitle}>Đặt xe ngay</ThemedText>
            <ThemedText style={styles.cardDescription}>
              Chỉ cần vài thao tác đơn giản để đặt xe
            </ThemedText>
            <Button
              title="Đặt xe"
              onPress={() => {}}
              style={styles.button}
            />
          </View>

          <View style={styles.card}>
            <ThemedText style={styles.cardTitle}>Chuyến đi gần đây</ThemedText>
            <ThemedText style={styles.cardDescription}>
              Xem lại các chuyến đi của bạn
            </ThemedText>
            <Button
              title="Xem lịch sử"
              variant="outline"
              onPress={() => {}}
              style={styles.button}
            />
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: theme.background.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.text.secondary,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: theme.background.secondary,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: theme.text.secondary,
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
}); 