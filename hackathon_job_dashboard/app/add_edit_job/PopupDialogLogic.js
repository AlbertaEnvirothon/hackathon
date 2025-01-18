import React, { useState, useEffect } from "react";
import PopupDialogUI from "./PopupDialogUI";
import { sendDataToDatabase } from "../../src/database"; // Import the function to send data to the database

export default function PopupDialogLogic({ visible, onClose, id }) {
  const [isVisible, setIsVisible] = useState(visible);
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    date: "",
    status: "offer",
    description: "",
  });

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleConfirm = () => {
    sendDataToDatabase(formData); // Send the form data to the database
    handleClose();
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <PopupDialogUI
      visible={isVisible}
      onClose={handleClose}
      onConfirm={handleConfirm}
      onChange={handleChange}
      formData={formData}
    />
  );
}
