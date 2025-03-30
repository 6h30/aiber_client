import { Stack } from 'expo-router';

export default function MoveLayout() {
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
        name="pick"
        options={{
          title: 'Chọn điểm đón',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pickup"
        options={{
          title: 'Chọn điểm đón',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dropoff"
        options={{
          title: 'Chọn điểm đến',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="confirm"
        options={{
          title: 'Xác nhận chuyến đi',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="selectCountry"
        options={{
          title: 'Chọn quốc gia',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addLocation"
        options={{
          title: 'Thêm địa điểm',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onDestination"
        options={{
          title: 'Chọn điểm đến',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="placeChat"
        options={{
          title: 'Chat địa điểm',
          headerShown: false,
        }}
      />
    </Stack>
  );
} 