import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Text, Animated, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { spacing } from "@/theme/spacing";

import {
  Header,
  Illustration,
  SearchBar,
  SuggestionItem,
  AdvanceBookingItem,
  RideOptionItem,
  OfferItem,
} from "@/components/moveComponent";
import {
  suggestions,
  rideOptions,
  offers,
  advanceBookings,
} from "@/data/MockData";

const MoveScreen = () => {
  const [destination, setDestination] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  const searchBarBackground = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.background.primary, Colors.background.primary],
    extrapolate: "clamp",
  });

  const searchBarElevation = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 5],
    extrapolate: "clamp",
  });

  const searchBarShadowOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 0.1],
    extrapolate: "clamp",
  });

  useEffect(() => {
    const scrollListener = scrollY.addListener(({ value }) => {
      setIsSticky(value > 220);
    });

    return () => {
      scrollY.removeListener(scrollListener);
    };
  }, []);

  const screenSections = [
    { type: "header", component: <Header /> },
    { type: "illustration", component: <Illustration /> },
    {
      type: "searchBar",
      component: (
        <Animated.View
          style={[
            styles.searchBarWrapper,
            {
              backgroundColor: searchBarBackground,
              elevation: searchBarElevation,
              shadowOpacity: scrollY.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 0.1],
              }),
            },
          ]}
        >
          <SearchBar
            destination={destination}
            setDestination={setDestination}
            isSticky={isSticky}
          />
        </Animated.View>
      ),
    },
    {
      type: "suggestions",
      component: (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Location history</Text>
          <FlatList
            data={suggestions}
            renderItem={({ item }) => <SuggestionItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      ),
    },
    {
      type: "rideOptions",
      component: (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rides for your every need</Text>
          <FlatList
            data={rideOptions}
            renderItem={({ item }) => <RideOptionItem item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      ),
    },
    {
      type: "advanceBookings",
      component: (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pre-book your ride</Text>
          <FlatList
            data={advanceBookings}
            renderItem={({ item }) => <AdvanceBookingItem item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      ),
    },
  ];

  return (
    <View style={styles.moveContainer}>
      <Animated.FlatList
        data={screenSections}
        renderItem={({ item }) => item.component}
        keyExtractor={(item, index) => item.type + index}
        stickyHeaderIndices={[2]}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        ListFooterComponent={
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>KrabHotSpot</Text>
            <FlatList
              data={offers}
              renderItem={({ item }) => <OfferItem item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              bounces={false}
              contentContainerStyle={{ paddingBottom: 50 }}
            />
          </View>
        }
      />
    </View>
  );
};

export default MoveScreen;

const styles = StyleSheet.create({
  moveContainer: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  searchBarWrapper: {
    padding: spacing.md,
    backgroundColor: Colors.background.primary,
  },
  sectionContainer: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.md,
    color: Colors.text.primary,
  },
});
