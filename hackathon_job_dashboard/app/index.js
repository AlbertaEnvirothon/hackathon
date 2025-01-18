import React, { useState } from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";
import PopupDialog from "./add_edit_job/PopupDialogLogic";
import { get_jobs } from "../src/database";

// Main APP entry point.
export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dialogId, setDialogId] = useState(null);

  const handleCreateNew = () => {
    setDialogId(null);
    setModalVisible(true);
  };

  const handleEditExisting = () => {
    setDialogId("acd592f3-88a8-4938-9643-30932d8d3628"); // change this later on
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <view>
        <Text style={styles.text}>lists </Text>
      </view>

      <View style={styles.buttonContainer}>
        <Button title="Create New Job Entry" onPress={handleCreateNew} />
        <Button title="Edit Existing Job Entry" onPress={handleEditExisting} />
      </View>
      <PopupDialog
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        id={dialogId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Dark background
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff", // White text color
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
});
