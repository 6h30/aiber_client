import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AdvanceBooking } from '@/data/types';

import { SVGS } from '@/constants/assets';
import { spacing } from "@/theme/spacing";
import { Colors } from '@/constants/Colors';

const AdvanceBookingItem: React.FC<{ item: AdvanceBooking }> = ({ item }) => {
  return (
    <View style={styles.advanceBookingItem}>
      <TouchableOpacity style={styles.advanceBookingItem__container}>
        <Image
          source={item.image}
          style={styles.advanceBookingItem__image}
        />
        <View style={styles.advanceBookingItem__textContainer}>
          <Text style={styles.advanceBookingItem__title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.advanceBookingItem__description}>
              {item.description}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  advanceBookingItem: {
    marginVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  advanceBookingItem__container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
    borderRadius: spacing.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: Colors.border.dark
  },

  advanceBookingItem__image: {
    width: 80,
    height: 80,
    borderRadius: spacing.sm,
    resizeMode: 'contain',
  },

  advanceBookingItem__textContainer: {
    flex: 1,
    marginLeft: spacing.md,
  },

  advanceBookingItem__title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },

  advanceBookingItem__description: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginTop: spacing.xs,
  },
});

export default AdvanceBookingItem;