import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import HistoryPick from "@/assets/svgs/bookingFlowSvgs/preBook/historyPick.svg";
import EditPencil from "@/assets/svgs/bookingFlowSvgs/preBook/editPencil.svg";
import EditAdd from "@/assets/svgs/bookingFlowSvgs/preBook/editAdd.svg";

import { savedLocations } from "@/data/MockData";
import { Location } from "@/data/types";
import { spacing } from "@/theme/spacing";

import { Colors } from "@/constants/Colors";
import { SVGS } from '@/constants/assets';

const SavedComponent = () => {
  const renderSavedItem = ({ item }: { item: Location }) => (
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
      <SVGS.editPencil style={styles.locationIcon} width={20} height={20} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addNewContainer}>
        <SVGS.editAdd style={styles.locationIcon} width={28} height={28} />
        <Text style={styles.addNewText}>Add new</Text>
      </TouchableOpacity>
      <FlatList
        data={savedLocations}
        renderItem={renderSavedItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SavedComponent;

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
  addNewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingBottom: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  addNewText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
