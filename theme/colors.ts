import { Appearance } from 'react-native';

// Base colors - Các màu cơ bản
const baseColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'rgba(0, 0, 0, 0)',
};

// Brand colors - Màu thương hiệu
const brandColors = {
  brand: {
    primary: '#66E1FF',    // Màu chính của ứng dụng
    secondary: '#007AFF',  // Màu phụ
    accent: '#FF2D55',     // Màu nhấn
    active: '#8BE8FF',     // Màu active
  }
};

// Text colors - Màu chữ
const textColors = {
  text: {
    primary: '#1A1A1A',    // Chữ chính
    secondary: '#666666',  // Chữ phụ
    disabled: '#B3B3B3',   // Chữ bị vô hiệu hóa
    gray: '#4A4A4A',       // Chữ màu xám
  }
};

// Background colors - Màu nền
const backgroundColors = {
  background: {
    primary: '#FFFFFF',    // Nền chính
    secondary: '#F5F5F5',  // Nền phụ
    light: '#F8FBFD',      // Nền nhẹ
    overlay: 'rgba(0, 0, 0, 0.5)', // Nền overlay
  }
};

// Border colors - Màu viền
const borderColors = {
  border: {
    primary: '#E0E0E0',    // Viền mặc định
    gray: '#BCBBC1',       // Viền xám
    dark: '#111111',       // Viền đậm
  }
};

// Status colors - Màu trạng thái
const statusColors = {
  status: {
    success: '#34C759',    // Thành công
    error: '#FF3B30',      // Lỗi
    warning: '#FF9500',    // Cảnh báo
    info: '#5856D6',       // Thông tin
  }
};

// Shadow colors - Màu bóng đổ
const shadowColors = {
  shadow: {
    gray: '#A0A0A0',       // Bóng đổ xám
    white: '#FFFFFF',      // Bóng đổ trắng
  }
};

// Light theme - Chế độ sáng
const lightTheme = {
  ...baseColors,
  ...brandColors,
  ...textColors,
  ...backgroundColors,
  ...borderColors,
  ...statusColors,
  ...shadowColors,
};

// Dark theme - Chế độ tối
const darkTheme = {
  ...baseColors,
  ...brandColors,
  text: {
    primary: '#FFFFFF',
    secondary: '#A1A1A1',
    disabled: '#666666',
    gray: '#A1A1A1',
  },
  background: {
    primary: '#1C1C1E',
    secondary: '#2C2C2E',
    light: '#2C2C2E',
    overlay: 'rgba(255, 255, 255, 0.1)',
  },
  border: {
    primary: '#3A3A3C',
    gray: '#3A3A3C',
    dark: '#FFFFFF',
  },
  status: {
    success: '#30D158',
    error: '#FF453A',
    warning: '#FF9F0A',
    info: '#5E5CE6',
  },
  shadow: {
    gray: '#000000',
    white: '#1C1C1E',
  },
};

// Hàm lấy theme dựa trên hệ thống
const getTheme = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

// Export theme hiện tại
export const theme = getTheme();

// Export các theme riêng biệt
export { lightTheme, darkTheme };

// Export các nhóm màu riêng biệt để sử dụng linh hoạt
export {
  baseColors,
  brandColors,
  textColors,
  backgroundColors,
  borderColors,
  statusColors,
  shadowColors,
}; 