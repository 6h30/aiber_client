export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  [14]: 14,
  [20]: 20,
};

export const padding = {
  all: (size: keyof typeof spacing) => ({
    padding: spacing[size],
  }),
  horizontal: (size: keyof typeof spacing) => ({
    paddingHorizontal: spacing[size],
  }),
  vertical: (size: keyof typeof spacing) => ({
    paddingVertical: spacing[size],
  }),
  top: (size: keyof typeof spacing) => ({
    paddingTop: spacing[size],
  }),
  bottom: (size: keyof typeof spacing) => ({
    paddingBottom: spacing[size],
  }),
  left: (size: keyof typeof spacing) => ({
    paddingLeft: spacing[size],
  }),
  right: (size: keyof typeof spacing) => ({
    paddingRight: spacing[size],
  }),
};

export const margin = {
  all: (size: keyof typeof spacing) => ({
    margin: spacing[size],
  }),
  horizontal: (size: keyof typeof spacing) => ({
    marginHorizontal: spacing[size],
  }),
  vertical: (size: keyof typeof spacing) => ({
    marginVertical: spacing[size],
  }),
  top: (size: keyof typeof spacing) => ({
    marginTop: spacing[size],
  }),
  bottom: (size: keyof typeof spacing) => ({
    marginBottom: spacing[size],
  }),
  left: (size: keyof typeof spacing) => ({
    marginLeft: spacing[size],
  }),
  right: (size: keyof typeof spacing) => ({
    marginRight: spacing[size],
  }),
}; 