import { Stack } from 'expo-router';

export default function ConfirmationLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Xác nhận',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="success"
        options={{
          title: 'Thành công',
          headerShown: false,
        }}
      />
    </Stack>
  );
} 