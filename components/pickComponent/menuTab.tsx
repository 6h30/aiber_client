// src/components/TabMenu.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { spacing } from "@/theme/spacing";
import { Colors } from "@/constants/Colors";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabMenuProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={activeTab === tab.id ? styles.tab__active : styles.tab}
            onPress={() => onTabChange(tab.id)}
          >
            <Text
              style={
                activeTab === tab.id ? styles.tabTextActive : styles.tabText
              }
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing[14],
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  tab__active: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: Colors.background.secondary,
  },
  tabText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  tabTextActive: { 
    fontSize: 16, 
    color: Colors.text.primary, 
    fontWeight: "bold" 
  },
  content: {
    flex: 1,
  },
});

export default TabMenu;
