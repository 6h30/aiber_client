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

import CreditCard from "@/assets/svgs/bookingFlowSvgs/preBook/creditCard.svg";
import ReceiptBill from "@/assets/svgs/bookingFlowSvgs/preBook/receiptBill.svg";
import CogSetting from "@/assets/svgs/bookingFlowSvgs/preBook/cogSetting.svg";
import AddCircle from "@/assets/svgs/bookingFlowSvgs/preBook/addCircle.svg";
import CashBriefcase from "@/assets/svgs/bookingFlowSvgs/preBook/cashBriefcase.svg";

import { Colors } from "@/constants/Colors";
import { spacing, margin, padding } from "@/theme/spacing";
import { SVGS } from "@/constants/assets";

const PaymentMethodScreen = () => {
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
              Payment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <SVGS.cog width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <View style={styles.section1}>
            <TouchableOpacity>
              <SVGS.creditCard width={24} height={24} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.section2_noborder}>
            <Text style={styles.address}>Payment method</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <SVGS.addCircle width={30} height={30} />
            <Text style={styles.buttonText}>Add Method</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <SVGS.cashBriefcase width={30} height={30} />
            <Text style={styles.buttonText}>All Added</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.sectionTitle}>Recent transactions</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.option}>
        <SVGS.receiptBill width={24} height={24} />
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>Payment</Text>
          <Text style={styles.optionSubtitle}>To KrabCar</Text>
        </View>
        <Text style={styles.optionTitle}>200.000đ</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <SVGS.receiptBill width={24} height={24} />
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>Payment</Text>
          <Text style={styles.optionSubtitle}>To KrabCar</Text>
        </View>
        <Text style={styles.optionTitle}>212.000đ</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
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
    width: 40,
  },
  section2_noborder: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border.primary,
    padding: spacing.sm,
    borderRadius: 8,
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
    backgroundColor: Colors.background.secondary,
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
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  optionTextContainer: {
    flex: 1,
    gap: 4,
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
    paddingHorizontal: 16,
    paddingTop: 16,
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

export default PaymentMethodScreen;
