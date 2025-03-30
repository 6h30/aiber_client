import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  MenuTab,
  RecentTab,
  SuggestedTab,
  SavedTab,
} from "@/components/pickComponent";

import { Colors } from "@/constants/Colors";
import { spacing } from "@/theme/spacing";
import { SVGS, IMAGES } from "@/constants/assets";

const PickScreen: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState("recent");

  const tabs = [
    { id: "recent", label: "Recent", content: <RecentTab /> },
    { id: "suggested", label: "Suggested", content: <SuggestedTab /> },
    { id: "saved", label: "Saved", content: <SavedTab /> },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.topHeader}>
        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity onPress={() => router.back()}>
              <Icon name="arrow-back" size={24} color={Colors.text.primary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <SVGS.cursorTarget width={24} height={24} />
            <Text style={styles.currentLocationText}>Current location</Text>
          </TouchableOpacity>

          <View style={styles.section3}>
            <TouchableOpacity
              onPress={() => router.push("/booking/move/selectCountry")}
            >
              <Image source={IMAGES.vnFlag} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.section1} />

          <View style={styles.section2}>
            <SVGS.searchCircle width={24} height={24} />
            <TextInput
              style={styles.searchInput}
              placeholder="Find airports by flight no."
              value={searchText || ""}
              onChangeText={setSearchText}
            />
            <TouchableOpacity>
              <SVGS.focusCamera width={24} height={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.section3}>
            <TouchableOpacity
              onPress={() => router.push("/booking/move/addLocation")}
            >
              <SVGS.addCircle width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <MenuTab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <View style={styles.footer}>
        <Text style={styles.screenTitle}>Need help?</Text>
        <TouchableOpacity style={styles.footerButton}>
          <SVGS.timeStop width={28} height={28} />
          <Text style={styles.footerText}>
            If you haven't decided where to go, select a ride with metered fare.
          </Text>
          <Icon name="chevron-right" size={20} color={Colors.text.secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseButton}
          onPress={() => router.push("/booking/move/onDestination")}
        >
          <SVGS.map width={20} height={20} />
          <Text style={styles.chooseButtonText}>Choose on KrabMaps</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  topHeader: {
    paddingTop: spacing.sm,
    gap: spacing.sm,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: spacing.md,
    backgroundColor: Colors.background.primary,
  },
  section1: {
    width: 30,
  },
  section2: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border.primary,
    paddingHorizontal: spacing.sm,
    borderRadius: 8,
    gap: 10,
  },
  section2_noborder: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.sm,
    gap: 10,
  },
  section3: {
    width: 60,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.text.primary,
  },
  currentLocationText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  footer: {
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.border.primary,
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.sm,
  },
  footerText: {
    fontSize: 14,
    color: Colors.text.secondary,
    flex: 1,
    marginHorizontal: spacing.md,
  },
  chooseButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.background.secondary,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: "center",
    marginTop: spacing.sm,
    borderWidth: 1,
    gap: 8,
  },
  chooseButtonText: {
    color: Colors.text.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PickScreen;
