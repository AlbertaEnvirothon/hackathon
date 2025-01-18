import React, { useState } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import PopupDialog from "./add_edit_job/PopupDialogLogic";

// Main APP entry point.
export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Root Layout</Text>
      <Button title="Show Popup" onPress={() => setModalVisible(true)} />
      <PopupDialog
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        id="12345"
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
});
