import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { theme } from '@/theme';
import { textStyles } from '@/theme/typography';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={theme.text.secondary}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    ...textStyles.body2,
    color: theme.text.primary,
    marginBottom: 8,
  },
  input: {
    ...textStyles.body1,
    color: theme.text.primary,
    backgroundColor: theme.background.light,
    borderWidth: 1,
    borderColor: theme.border.primary,
    borderRadius: 8,
    padding: 12,
  },
  inputError: {
    borderColor: theme.status.error,
  },
  errorText: {
    ...textStyles.caption,
    color: theme.status.error,
    marginTop: 4,
  },
}); 