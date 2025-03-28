import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import { SVGS } from '@/constants/assets';
// import MapIcon from "@/assets/svgs/bookingSvgs/mapIcon.svg";
import { spacing } from "@/theme/spacing";
import { theme } from "@/theme/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Element: Back Button */}
      <TouchableOpacity style={styles.header__backButton}>
        <Icon name="arrow-back" size={24} color={theme.text.primary} />
      </TouchableOpacity>

      {/* Element: Title */}
      <Text style={styles.header__title}>Transport</Text>

      {/* Element: Right Action */}
      <TouchableOpacity
        style={styles.header__rightAction}
        onPress={() => router.push("/booking/move/pickup")}
      >
        <Text style={styles.header__rightActionText}>Map</Text>
        <SVGS.map width={24} height={24} /> 
        {/* <MapIcon width={24} height={24} /> */}
      </TouchableOpacity>
    </View>
  );
};

// Styles theo BEM
const styles = StyleSheet.create({
  // Block: Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.lg,
    backgroundColor: theme.background.primary,
  },

  // Element: Back Button
  header__backButton: {
    padding: spacing.xs, // 4 (để vùng nhấn lớn hơn một chút)
  },

  // Element: Title
  header__title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.text.primary,
  },

  // Element: Right Action
  header__rightAction: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.border.dark,
    gap: spacing.xs, // 4 (thay cho gap: 5 để đồng bộ với spacing)
    alignItems: "center",
    paddingHorizontal: spacing.sm, // 8 (thay 5)
    paddingVertical: spacing.xs, // 4 (thay 2)
    borderRadius: spacing.sm, // 8
  },
  header__rightActionText: {
    fontSize: 12,
    color: theme.text.primary, // Thay #000
  },
});

export default Header;
