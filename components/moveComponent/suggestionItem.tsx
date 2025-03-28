import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SuggestionItemProps {
  item: {
    id: string;
    name: string;
    address: string;
  };
}

const SuggestionItem = ({ item }: SuggestionItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#666666',
  },
});

export default SuggestionItem; 