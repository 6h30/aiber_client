import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import CheckSquare from "@/assets/svgs/bookingFlowSvgs/preBook/checkSquare.svg";
import GalleryImg from "@/assets/svgs/bookingFlowSvgs/preBook/galleryImg.svg";
import CameraImg from "@/assets/svgs/bookingFlowSvgs/preBook/cameraImg.svg";
import Shapes from "@/assets/svgs/bookingFlowSvgs/preBook/shapes.svg";
import HoleFlag from "@/assets/svgs/bookingFlowSvgs/preBook/holeFlag.svg";

import { Colors } from "@/constants/Colors";
import { spacing } from "@/theme/spacing";

import { SVGS } from "@/constants/assets";

const PlaceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
              487/47 Huynh Tan Phat St., Tan Thuan Dong Wd., Dist. 7, HCMC
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <SVGS.historyPick width={24} height={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address}>
              487/47 Huynh Tan Phat St., Tan Thuan Dong Wd., Dist. 7, Ho Chi
              Minh City
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <SVGS.shapes width={24} height={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address}>Residential</Text>
          </TouchableOpacity>
        </View>

        {/* Phần Camera và Gallery */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <SVGS.camera width={30} height={30} />
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <SVGS.galleryImg width={30} height={30} />
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
        </View>

        {/* Phần Edit this place */}
        <View style={styles.footer}>
          <Text style={styles.sectionTitle}>Edit this place</Text>
          {/* Change incorrect information */}
          <TouchableOpacity style={styles.option}>
            <SVGS.checkSquare width={24} height={24} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>
                Change incorrect information
              </Text>
              <Text style={styles.optionSubtitle}>
                Edit name, location, category, etc.
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
          {/* Feedback on place */}
          <TouchableOpacity style={styles.option}>
            <SVGS.holeFlag width={24} height={24} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Feedback on place</Text>
              <Text style={styles.optionSubtitle}>
                Closed, non-existent, duplicate, etc.
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    width: 40,
  },
  section2_noborder: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.sm,
    gap: 10,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text.primary,
    flexWrap: "wrap",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
    paddingHorizontal: 16,
    gap: 16,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.text.primary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  optionSubtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text.primary,
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
    paddingVertical: 10,
  },
});

export default PlaceScreen;
