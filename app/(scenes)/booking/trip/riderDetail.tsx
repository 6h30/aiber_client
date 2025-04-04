import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { useRouter } from "expo-router";
import HomePoint from "@/assets/svgs/bookingFlowSvgs/homePoint.svg";
import Safety from "@/assets/svgs/bookingFlowSvgs/shield.svg";
import Share from "@/assets/svgs/bookingFlowSvgs/share.svg";
import Call from "@/assets/svgs/bookingFlowSvgs/phoneCall.svg";
import StartIconYellow from "@/assets/svgs/bookingFlowSvgs/preBook/startIconYellow.svg";

import ButtonF from "@/components/stylesFunny/ButtonF";
import { Colors } from "@/constants/Colors";
import { SVGS, IMAGES } from "@/constants/assets";

// Constants
const driver_avt = IMAGES.krabGo;

const RideDetailScreen = () => {
  const router = useRouter();

  const handleSafety = () => {
    // Logic for safety feature
    console.log("Safety clicked");
  };

  const handleShareTrip = () => {
    router.push("/booking/trip/shareT");
  };

  const handleCallDriver = () => {
    router.push("/booking/trip/callS");
  };

  const handleMessage = () => {
    router.push("/booking/trip/chatS");
  };

  const handleRateDriver = () => {
    router.push("/booking/trip/rateDriver");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Meet Your Driver</Text>
          <Text style={styles.subtitle}>
            At the pickup point in{" "}
            <Text style={styles.timeHighlight}>2 min</Text>
          </Text>
        </View>
      </View>
      <View style={styles.mapContainer}>{/* <MapComponent /> */}</View>
      <View style={styles.footer}>
        <View style={styles.infoContainer}>
          <View style={styles.driverInfo}>
            <Image style={styles.driverImage} source={driver_avt} />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>51L-12345</Text>
              <Text style={styles.driverFullName}>4 seats</Text>
              <Text style={styles.carInfo}>White Suzuki S-Presso XL</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>4.9</Text>
                <SVGS.star height={20} width={20} />
              </View>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <View style={styles.locationRow}>
              <SVGS.homePoint
                style={styles.locationIcon}
                width={28}
                height={28}
              />
              <View>
                <Text style={styles.locationText}>487/47</Text>
                <Text style={styles.locationDetails}>
                  Vo Thi Nho street, District 7, HCM city
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleRateDriver}
            >
              <SVGS.shield style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleShareTrip}
            >
              <SVGS.share style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleCallDriver}
            >
              <SVGS.phoneCall style={styles.locationIcon} width={28} height={28} />
              <Text style={styles.actionButtonText}>Call</Text>
            </TouchableOpacity>
          </View>
          <ButtonF
            bgColor="#66E1FF"
            textColor="#000"
            onPress={handleMessage}
            title="Send a message..."
            size="secondary"
            radius="mini"
          />
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
  mapContainer: {
    flex: 1,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.primary,
    // marginTop: 4,
  },
  timeHighlight: {
    fontWeight: "bold",
    color: Colors.text.secondary,
  },
  driverInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    // marginBottom: 14,
  },
  driverImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    backgroundColor: Colors.background.primary,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text.primary,
  },
  driverFullName: {
    fontSize: 16,
    color: Colors.text.primary,
    marginTop: 2,
  },
  carInfo: {
    fontSize: 14,
    color: Colors.text.primary,
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  rating: {
    fontSize: 14,
    color: Colors.text.primary,
    fontWeight: "600",
    marginTop: 4,
    marginRight: 4,
  },
  locationContainer: {
    marginBottom: 14,
    padding: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  locationIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text.primary,
  },
  locationDetails: {
    fontSize: 14,
    color: Colors.text.primary,
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  actionButton: {
    flexDirection: "row",
    width: "30%",
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  actionButtonText: {
    fontSize: 14,
    marginTop: 6,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 14,
  },
  footer: {
    borderWidth: 1,
    borderColor: Colors.border.primary,
    borderRadius: 14,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default RideDetailScreen;
