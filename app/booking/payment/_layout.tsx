import { Stack } from 'expo-router';

export default function PaymentLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Thanh toán',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cash"
        options={{
          title: 'Tiền mặt',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="card"
        options={{
          title: 'Thẻ',
          headerShown: false,
        }}
      />
    </Stack>
  );
} 