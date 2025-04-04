import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import ButtonF from "@/components/stylesFunny/ButtonF";

// import MapComponent from "@/components/MapComponent";

import { spacing, margin, padding } from "@/theme/spacing";

import { SVGS, IMAGES } from "@/constants/assets";
import { Colors } from "@/constants/Colors";

const LookingForDriverScreen = () => {
  const router = useRouter();
  const krabGoImage = IMAGES.krabGo;

  const animationRef = useRef<LottieView>(null);
  const handleFindRider = () => {
    router.push("/booking/trip/riderDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Looking for Drivers</Text>
          <Text style={styles.subtitle}>Searching for nearby drivers...</Text>
        </View>
        <ButtonF
          bgColor="#66E1FF"
          textColor="#000"
          title="Cancel"
          size="secondary"
          radius="mini"
          containerStyles={{
            width: "30%",
            alignSelf: "flex-end",
          }}
        ></ButtonF>
      </View>

      <View style={styles.mapContainer}></View>

      <View style={styles.footer}>
        <View style={styles.infoContainer}>
          <View style={styles.carContainer}>
            <Image source={krabGoImage} style={styles.carImage} />
            <Text style={styles.waitingText}>Please wait a moment...</Text>
          </View>

          <View style={styles.locationCard}>
            <SVGS.homePoint width={24} height={24} style={styles.locationIcon} />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>487/47</Text>
              <Text style={styles.locationSubtitle}>
                Vo Thi Nho, District 7, HCM
              </Text>
            </View>
          </View>

          <View style={styles.locationCard}>
            <SVGS.pickPoint width={24} height={24} style={styles.locationIcon} />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Soul 22 Coffee</Text>
              <Text style={styles.locationSubtitle}>
                Vo Thi Nho, District 1, HCM
              </Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <SVGS.coinCash width={30} height={30} />
            <Text style={styles.priceText}>20.000đ</Text>
          </View>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={handleFindRider}
          >
            <Text style={styles.footerText}>
              Driver is on the way to pick you up. Please wait a moment...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.background.primary,
    shadowColor: Colors.shadow.white,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  mapContainer: {
    flex: 1,
    // backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  carContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  carImage: {
    width: 80,
    height: 80,
  },
  waitingText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  infoContainer: {
    backgroundColor: Colors.background.primary,
    padding: 16,
    borderRadius: 14,
  },
  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  locationIcon: {
    marginRight: 12,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  locationSubtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  footer: {
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: 14,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.background.primary,
  },

  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  footerText: {
    fontSize: 14,
    color: Colors.text.secondary,
    flex: 1,
    marginHorizontal: 8,
  },
});

export default LookingForDriverScreen;
