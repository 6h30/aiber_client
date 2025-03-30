import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { MenuTab, RecentTab, SuggestedTab, SavedTab } from "@/components/pickComponent";

import CursorTaget from "@/assets/svgs/bookingFlowSvgs/preBook/cursorTaget.svg";
import PickPoint from "@/assets/svgs/bookingFlowSvgs/pickPoint.svg";
import DeleteCirle from "@/assets/svgs/bookingFlowSvgs/preBook/deleteCircle.svg";

import ButtonF from "@/components/stylesFunny/ButtonF";
import { Colors } from "@/constants/Colors";

import { SVGS } from '@/constants/assets';
import { spacing } from "@/theme/spacing";

import { useRouter } from "expo-router";

const AddLocationScreen: React.FC = () => {
    const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState("recent");
  const [stopCount, setStopCount] = useState(2);
  const [showTabs, setShowTabs] = useState(false);

  const tabs = [
    { id: "recent", label: "Recent", content: <RecentTab /> },
    { id: "suggested", label: "Suggested", content: <SuggestedTab /> },
    { id: "saved", label: "Saved", content: <SavedTab /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Thanh tìm kiếm và nút quay lại */}
      <View style={styles.searchBar}>
        <View style={styles.section1}>
          <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.section2_noborder}>
          <SVGS.cursorTarget width={24} height={24} />
          <Text style={styles.currentLocationText}>Current location</Text>
        </TouchableOpacity>
        <View style={styles.section3}></View>
      </View>

      {/* Điểm dừng 1 - Không có nút xóa vì là tối thiểu */}
      <View
        style={[
          styles.searchBar,
          {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingTop: 0,
          },
        ]}
      >
        <View style={styles.section1} />
        <View style={styles.section2}>
          <SVGS.pickPoint width={24} height={24} />
          <TextInput
            style={styles.searchInput}
            placeholder="Add a stop"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setShowTabs(true)}
            onBlur={() => setShowTabs(false)}
          />
        </View>
        <View style={styles.section3}></View>
      </View>

      {/* Điểm dừng 2 - Không có nút xóa vì là tối thiểu */}
      <View
        style={[
          styles.searchBar,
          {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingTop: 0,
          },
        ]}
      >
        <View style={styles.section1} />
        <View style={styles.section2}>
          <SVGS.pickPoint width={24} height={24} />
          <TextInput
            style={styles.searchInput}
            placeholder="Add a stop"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={() => setShowTabs(true)}
            onBlur={() => setShowTabs(false)}
          />
        </View>
        <View style={styles.section3}></View>
      </View>

      {/* Điểm dừng 3 - Có nút xóa */}
      {stopCount > 2 && (
        <View
          style={[
            styles.searchBar,
            {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 0,
            },
          ]}
        >
          <View style={styles.section1} />
          <View style={styles.section2}>
            <SVGS.pickPoint width={24} height={24} />
            <TextInput
              style={styles.searchInput}
              placeholder="Add a stop"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <View style={styles.section3}>
            <TouchableOpacity
              onPress={() => setStopCount(2)}
              style={{ padding: 5 }}
            >
              <SVGS.deleteCircle width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Điểm dừng 4 - Có nút xóa */}
      {stopCount > 3 && (
        <View
          style={[
            styles.searchBar,
            {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 0,
            },
          ]}
        >
          <View style={styles.section1} />
          <View style={styles.section2}>
            <SVGS.pickPoint width={24} height={24} />
            <TextInput
              style={styles.searchInput}
              placeholder="Add a stop"
              value={searchText}
              onChangeText={setSearchText}
              onFocus={() => setShowTabs(true)}
              onBlur={() => setShowTabs(false)}
            />
          </View>
          <View style={styles.section3}>
            <TouchableOpacity
              onPress={() => setStopCount(3)}
              style={{ padding: 5 }}
            >
              <SVGS.deleteCircle width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Nút thêm điểm dừng - chỉ hiển thị khi chưa đạt tối đa 4 */}
      {stopCount < 4 && (
        <TouchableOpacity
          style={{
            padding: 5,
            alignItems: "center",
            // marginTop: 5,
          }}
          onPress={() => setStopCount((prev) => prev + 1)}
        >
          <Text
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 8,
              color: "#333",
              fontSize: 16,
            }}
          >
            Add up to 4 stops
          </Text>
        </TouchableOpacity>
      )}

      {showTabs && (
        <MenuTab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* <TabMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} /> */}

      <View style={styles.footer}>
      <ButtonF
          bgColor="#66E1FF"
          textColor="#333"
          title="Done"
          size="secondary"
          radius="mini"
          // onPress={() => router.push("/bookingFlow/pickLocation/pickScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing.md,
    padding: spacing.md,
    backgroundColor: Colors.background.primary,
    paddingVertical: spacing[14],
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
    padding: spacing.sm,
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
  },
  currentLocationText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  locationListContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  footer: {
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.border.primary,
  },
});

export default AddLocationScreen;
