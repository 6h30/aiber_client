import { Stack } from 'expo-router';

export default function BookingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Đặt xe',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="move"
        options={{
          title: 'Di chuyển',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="payment"
        options={{
          title: 'Thanh toán',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="confirmation"
        options={{
          title: 'Xác nhận',
          headerShown: false,
        }}
      />
      
    </Stack>
  );
} 