import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import { SVGS } from '@/constants/assets';
import { spacing } from "@/theme/spacing";
import { Colors } from '@/constants/Colors';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.header}>
        {/* Element: Back Button */}
        <TouchableOpacity style={styles.header__backButton} onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color={Colors.text.primary} />
        </TouchableOpacity>

        {/* Element: Title */}
        <Text style={styles.header__title}>Transport</Text>

        {/* Element: Right Action */}
        <TouchableOpacity
          style={styles.header__rightAction}
          onPress={() => router.push("/booking/move/pick")}
        >
          <Text style={styles.header__rightActionText}>Map</Text>
          <SVGS.map width={24} height={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.background.primary, 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.md,
    backgroundColor: Colors.background.primary,
  },
  header__backButton: {
    padding: spacing.xs,
  },
  header__title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  header__rightAction: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.border.dark,
    gap: spacing.xs,
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.sm,
  },
  header__rightActionText: {
    fontSize: 12,
    color: Colors.text.primary,
  },
});

export default Header;
