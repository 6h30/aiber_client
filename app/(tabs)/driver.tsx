import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/Button';
import { theme } from '@/theme';

const mockDrivers = [
  {
    id: '1',
    name: 'Lê Văn C',
    phone: '0123456789',
    vehicle: 'Toyota Vios',
    plateNumber: '30A-12345',
    status: 'online',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Phạm Thị D',
    phone: '0987654321',
    vehicle: 'Honda City',
    plateNumber: '30B-67890',
    status: 'offline',
    rating: 4.5,
  },
  // Thêm dữ liệu mẫu khác
];

export default function DriverScreen() {
  const renderDriverItem = ({ item }: { item: typeof mockDrivers[0] }) => (
    <View style={styles.driverCard}>
      <View style={styles.driverInfo}>
        <View style={styles.nameContainer}>
          <ThemedText style={styles.driverName}>{item.name}</ThemedText>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  item.status === 'online'
                    ? theme.status.success
                    : theme.text.secondary,
              },
            ]}
          >
            <ThemedText style={styles.statusText}>
              {item.status === 'online' ? 'Đang hoạt động' : 'Ngoại tuyến'}
            </ThemedText>
          </View>
        </View>
        <ThemedText style={styles.driverPhone}>{item.phone}</ThemedText>
        <ThemedText style={styles.vehicleInfo}>
          {item.vehicle} - {item.plateNumber}
        </ThemedText>
        <View style={styles.ratingContainer}>
          <ThemedText style={styles.rating}>★ {item.rating}</ThemedText>
        </View>
      </View>
      <View style={styles.actions}>
        <Button
          title="Chi tiết"
          variant="outline"
          onPress={() => {}}
          style={styles.actionButton}
        />
        <Button
          title={item.status === 'online' ? 'Khóa' : 'Mở khóa'}
          onPress={() => {}}
          style={styles.actionButton}
        />
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Quản lý tài xế</ThemedText>
        <Button
          title="Thêm tài xế"
          onPress={() => {}}
          style={styles.addButton}
        />
      </View>

      <FlatList
        data={mockDrivers}
        renderItem={renderDriverItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    width: 150,
  },
  list: {
    padding: 20,
  },
  driverCard: {
    backgroundColor: theme.background.secondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  driverInfo: {
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  driverPhone: {
    fontSize: 14,
    color: theme.text.secondary,
    marginBottom: 4,
  },
  vehicleInfo: {
    fontSize: 14,
    color: theme.text.secondary,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: theme.status.warning,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: theme.white,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  actionButton: {
    width: 100,
  },
}); 