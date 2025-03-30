import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { suggestedLocations } from "@/data/MockData";
import { Location } from "@/data/types";

import { Colors } from "@/constants/Colors";
import { SVGS } from '@/constants/assets';

const SuggestedComponent = () => {
  const renderSuggestedItem = ({ item }: { item: Location }) => (
    <TouchableOpacity style={styles.locationItem}>
      <View>
        <SVGS.historyPick style={styles.locationIcon} width={28} height={28} />
        <Text style={styles.locationDistance}>{item.distance}</Text>
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>{item.name}</Text>
        <Text style={styles.locationAddress} numberOfLines={2}>
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.componentTitle}>Frequently used</Text>
      <FlatList
        data={suggestedLocations}
        renderItem={renderSuggestedItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.componentTitle}>Popular</Text>
    </View>
  );
};

export default SuggestedComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  locationIcon: {
    marginHorizontal: 5,
  },
  locationDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationAddress: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginVertical: 2,
    lineHeight: 20,
  },
  locationDistance: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginTop: 8,
    marginHorizontal: 5,
  },
  componentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
