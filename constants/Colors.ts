/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  // primary: '#007AFF',
  // secondary: '#5856D6',
  // background: '#FFFFFF',
  // text: '#000000',
  // textSecondary: '#8E8E93',
  // border: '#C6C6C8',
  // error: '#FF3B30',
  // success: '#34C759',
  // warning: '#FF9500',

  primary: {
    light: '#66E1FF',
    main: '#007AFF',
    dark: '#005BBB',
  },
  secondary: {
    light: '#A3A1FB',
    main: '#5856D6',
    dark: '#3D3BB1',
  },
  error: {
    light: '#FF6961',
    main: '#FF3B30',
    dark: '#C62828',
  },
  success: {
    light: '#81E6D9',
    main: '#34C759',
    dark: '#008577',
  },
  warning: {
    light: '#FFD580',
    main: '#FF9500',
    dark: '#E57C00',
  },

  /** 🎨 Neutral Colors (Shades of Gray) */
  neutral: {
    100: '#F5F5F5',
    200: '#E1E1E1',
    300: '#C6C6C8',
    400: '#A1A1A1',
    500: '#8E8E93',
    600: '#6D6D72',
    700: '#4A4A4A',
    800: '#2C2C2E',
    900: '#1C1C1E',
  },

  background: {
    primary: '#FFFFFF',    // Nền chính
    secondary: '#F5F5F5',  // Nền phụ
    light: '#F8FBFD',      // Nền nhẹ
    overlay: 'rgba(0, 0, 0, 0.5)', // Nền overlay
    brand: '#66E1FF',
  },

  border: {
    primary: '#E0E0E0',    // Viền mặc định
    gray: '#BCBBC1',       // Viền xám
    dark: '#111111',      // Viền tối
  },

  text: {
    primary: '#1A1A1A',    // Chữ chính
    secondary: '#666666',  // Chữ phụ
    disabled: '#B3B3B3',   // Chữ bị vô hiệu hóa
    gray: '#4A4A4A',       // Chữ màu xám
  },

  status: {
    success: '#34C759',    // Thành công
    error: '#FF3B30',      // Lỗi
    warning: '#FF9500',    // Cảnh báo
    info: '#5856D6',       // Thông tin
  },

  shadow: {
    gray: '#A0A0A0',       // Bóng đổ xám
    white: '#FFFFFF',      // Bóng đổ trắng
  },

  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

