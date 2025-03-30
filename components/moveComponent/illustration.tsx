import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { spacing } from '@/theme/spacing';
import { IMAGES } from '@/constants/assets';
import { Colors } from '@/constants/Colors';

const Illustration = () => {
  return (
    <View style={styles.illustration}>
      <Image
        source={IMAGES.moveS2}
        style={styles.illustration__image}
      />
      <Text style={styles.illustration__subHeader}>
        Wherever you're going, let's get you there!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  illustration: {
    alignItems: 'center',
    paddingVertical: spacing.sm,
    backgroundColor: Colors.background.primary,
  },
  illustration__image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  illustration__subHeader: {
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 0,
  },
});

export default Illustration;