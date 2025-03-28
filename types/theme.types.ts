export interface ThemeColors {
  // Base colors
  white: string;
  black: string;
  transparent: string;

  // Brand colors
  brand: {
    primary: string;
    secondary: string;
    accent: string;
    active: string;
  };

  // Text colors
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    gray: string;
  };

  // Background colors
  background: {
    primary: string;
    secondary: string;
    light: string;
    overlay: string;
  };

  // Border colors
  border: {
    primary: string;
    gray: string;
    dark: string;
  };

  // Status colors
  status: {
    success: string;
    error: string;
    warning: string;
    info: string;
  };

  // Shadow colors
  shadow: {
    gray: string;
    white: string;
  };
}

export interface ThemeTypography {
  fontFamily: {
    regular: string;
    medium: string;
    bold: string;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  fontWeight: {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  [14]: number;
  [20]: number;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
} 