import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export default function DashboardUI({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.company_name}</Text>
          <Text style={styles.text}>{item.position}</Text>
          <Text style={styles.text}>{item.status}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});
