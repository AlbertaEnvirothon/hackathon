import React, { useState } from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";
import PopupDialog from "./add_edit_job/PopupDialogLogic";

// Main APP entry point.
export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dialogId, setDialogId] = useState(null);

  const handleCreateNew = () => {
    setDialogId(null);
    setModalVisible(true);
  };

  const handleEditExisting = () => {
    setDialogId("12345"); // Replace with the actual ID of the job entry to edit
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Root Layout</Text>
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
