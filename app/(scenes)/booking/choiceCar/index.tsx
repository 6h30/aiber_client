import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

import { BlurView } from "expo-blur";
import ButtonF from "@/components/stylesFunny/ButtonF";
import KrabCarCard from "@/components/KrabCar";


import MoreDot from "@/assets/svgs/bookingFlowSvgs/preBook/moreDot.svg";
import ArrowRight from "@/assets/svgs/bookingFlowSvgs/preBook/arrowRight.svg";
import HandMoney from "@/assets/svgs/bookingFlowSvgs/preBook/handMoney.svg";
import InfoCircle from "@/assets/svgs/bookingFlowSvgs/preBook/infoCircle.svg";
import CalendarEdit from "@/assets/svgs/bookingFlowSvgs/preBook/calendarEdit.svg";

import { Colors } from "@/constants/Colors";
import { spacing } from "@/theme/spacing";

import { SVGS, IMAGES } from "@/constants/assets";

const SelectCarScreen = () => {
  const router = useRouter();

  const krabGoImage = IMAGES.krabGo;
  const krabMotoImage = IMAGES.krabMoto;
  const krabProImage = IMAGES.krabPro;
  const krabAutoImage = IMAGES.krabAuto;

  const rideData = [
    {
      id: "1",
      carType: "Economic",
      seats: "4-seater car",
      estimatedTime: "Est. 3 mins away",
      price: "68.000đ",
      promoPercentage: 20,
      image: krabGoImage,
      iconData: <SVGS.infoCircle width={16} height={16} />,
    },
    {
      id: "2",
      carType: "Premium",
      seats: "4-seater car",
      estimatedTime: "Est. 5 mins away",
      price: "120.000đ",
      promoPercentage: 15,
      image: krabProImage,
    },
    {
      id: "3",
      carType: "Bike",
      seats: "1-seater bike",
      estimatedTime: "Est. 2 mins away",
      price: "25.000đ",
      // Không có khuyến mãi
      image: krabMotoImage,
    },
    {
      id: "4",
      carType: "SUV",
      seats: "7-seater car",
      estimatedTime: "Est. 4 mins away",
      price: "150.000đ",
      promoPercentage: 10,
      image: krabAutoImage,
    },
    {
      id: "5",
      carType: "More",
      seats: "",
      estimatedTime: "",
      price: "",
      promoPercentage: 0,
      image: { uri: "/" },
      iconData: <SVGS.moreDot width={16} height={16} />,
    },
  ];

  const [selectedCarId, setSelectedCarId] = React.useState<string | null>(null);

  const handleSelectCar = (id: string) => {
    setSelectedCarId(id); // Lưu xe được chọn
  };

  const handleLookingRider = () => {
    if (!selectedCarId) {
      alert("Please select a car first!");
      return;
    }
    router.push("/booking/trip");
  };
  
  const handleCalendar = () => {
    router.push("/");
  }

  const handlePaymentMethod = () => {
    router.push("/booking/choiceCar/paymentMethod");
  }

  const handleOffers = () => {
    router.push("/booking/choiceCar/offers");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 🗺 Bản đồ */}
      <View style={styles.mapContainer}>{/* <MapComponent /> */}</View>

      {/* 🚗 Danh sách các loại xe */}
      <ScrollView
        style={styles.rideList}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
      >
        <View>
          {rideData.map((ride) => (
            <TouchableOpacity
              key={ride.id}
              onPress={() => handleSelectCar(ride.id)}
            >
              <View>
                <KrabCarCard
                  carType={ride.carType}
                  seats={ride.seats}
                  estimatedTime={ride.estimatedTime}
                  price={ride.price}
                  promoPercentage={ride.promoPercentage}
                  image={ride.image}
                  InfoIcon={ride.iconData}
                  isSelected={ride.id === selectedCarId}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.container2}>
          <View style={styles.logoContainer2}>
            <SVGS.handMoney width={24} height={24} />
            <Text>Save 6.000đ on your ride when you join KrabUnlimited.</Text>
            <SVGS.arrowRight width={18} height={18} />
          </View>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={handlePaymentMethod}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png",
              }}
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <Text style={styles.logoText}>MoMo</Text>
          </TouchableOpacity>

          {/* Chữ Offers */}
          <TouchableOpacity
            style={styles.offersText}
            onPress={handleOffers}
          >
            <Text>Offers</Text>
          </TouchableOpacity>

          {/* Icon Menu (ba chấm) */}
          <TouchableOpacity>
            <SVGS.moreDot width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonleft}>
          <TouchableOpacity style={styles.calendarButton} onPress={handleCalendar}>
            <SVGS.calendarEdit width={36} height={36} />
          </TouchableOpacity>

          <ButtonF
            bgColor="#66E1FF"
            textColor="#000"
            onPress={handleLookingRider}
            title="Confirm Car and Look"
            size="secondary"
            radius="mini"
            containerStyles={{
              width: "80%",
              alignSelf: "center",
            }}
          ></ButtonF>
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
    height: 200,
  },
  leaveNowButton: {
    backgroundColor: Colors.background.secondary,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
  },
  leaveNowText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  rideList: {
    position: "relative",
    marginBottom: 150,
    flexDirection: "column",
    backgroundColor: Colors.background.primary,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: Colors.border.primary,
  },
  continueButton: {
    backgroundColor: Colors.background.secondary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.text.primary,
    fontWeight: "bold",
  },
  rideOption: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    elevation: 6,
    shadowColor: Colors.text.primary,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    marginVertical: 8,
    marginHorizontal: 12,
    overflow: "hidden",
  },
  selectedRide: {
    borderColor: Colors.border.primary,
    elevation: 8,
    shadowOpacity: 0.25,
  },
  blurContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  vehicleImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 12,
    elevation: 2,
    shadowColor: Colors.text.primary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  rideDetails: {
    flex: 1,
    justifyContent: "center",
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text.primary,
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  originalPrice: {
    fontSize: 14,
    color: Colors.text.secondary,
    textDecorationLine: "line-through",
    marginRight: 6,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text.primary,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.background.primary,
    gap: 10,
  },
  logoContainer: {
    flexDirection: "row",
    flex: 40,
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: Colors.border.primary,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  logoContainer2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    gap: 6,
    backgroundColor: Colors.background.secondary,
    borderRadius: 10,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  offersText: {
    fontSize: 16,
    color: Colors.text.secondary,
    flex: 20,
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: Colors.border.primary,
  },
  buttonleft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Colors.background.primary,
    gap: 10,
  },
  calendarButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.border.primary,
    padding: 6,
  },
  footer: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: Colors.border.primary,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.background.primary,
  },
});

export default SelectCarScreen;
