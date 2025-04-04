// src/components/OfferItem/OfferItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SVGS } from '@/constants/assets';

import { spacing } from "@/theme/spacing";
import { Colors } from '@/constants/Colors';

interface Offer {
  id: string;
  title: string;
  discount: string;
  image: any;
}

const OfferItem: React.FC<{ item: Offer }> = ({ item }) => {
  return (
    <View style={styles.offerItem}>
      <Image source={item.image} style={styles.offerItem__image} />
      <Text style={styles.offerItem__title}>{item.title}</Text>
      <Text style={styles.offerItem__discount}>{item.discount}</Text>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  offerItem: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center'
  },

  offerItem__image: {
    width: 100,
    height: 120,
    borderRadius: spacing.md,
    borderWidth: 1,
    borderColor: Colors.border.dark
  },

  offerItem__title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginTop: spacing.xs,
  },

  offerItem__discount: {
    fontSize: 12,
    paddingBottom: spacing.md,
  },
});

export default OfferItem;