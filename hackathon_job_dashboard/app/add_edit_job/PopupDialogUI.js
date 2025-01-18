import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Picker,
} from "react-native";

export default function PopupDialogUI({
  visible,
  onClose,
  onConfirm,
  onChange,
  formData,
}) {
  const [status, setStatus] = useState(formData.status);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Popup Dialog</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Company Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              placeholderTextColor="#aaa"
              value={formData.companyName}
              onChangeText={(text) => onChange("companyName", text)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Job Title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Title"
              placeholderTextColor="#aaa"
              value={formData.jobTitle}
              onChangeText={(text) => onChange("jobTitle", text)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date:</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#aaa"
              value={formData.date}
              onChangeText={(text) => onChange("date", text)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status:</Text>
            <Picker
              selectedValue={status}
              style={styles.input}
              onValueChange={(itemValue) => {
                setStatus(itemValue);
                onChange("status", itemValue);
              }}
            >
              <Picker.Item label="Offer" value="offer" />
              <Picker.Item label="Rejected" value="rejected" />
              <Picker.Item label="Applied" value="applied" />
              <Picker.Item label="Interview" value="interview" />
            </Picker>
          </View>
          <TextInput
            style={styles.description}
            placeholder="Description"
            placeholderTextColor="#aaa"
            multiline={true}
            numberOfLines={4}
            value={formData.description}
            onChangeText={(text) => onChange("description", text)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Confirm" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    width: "90%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)", // Subtle shadow
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text color
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  label: {
    flex: 1,
    color: "#fff", // White text color
    fontSize: 16,
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#fff", // White text color
    backgroundColor: "#444", // Darker background
  },
  description: {
    height: 80,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#fff", // White text color
    backgroundColor: "#444", // Darker background
    width: "100%",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
