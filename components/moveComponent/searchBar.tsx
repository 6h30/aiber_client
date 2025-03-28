import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  destination: string;
  setDestination: (value: string) => void;
  isSticky: boolean;
}

const SearchBar = ({ destination, setDestination, isSticky }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập điểm đến"
        value={destination}
        onChangeText={setDestination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
  },
  input: {
    fontSize: 16,
  },
});

export default SearchBar; 