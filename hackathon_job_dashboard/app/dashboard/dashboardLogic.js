import React, { useState, useEffect } from "react";
import { sendDataToDatabase } from "../../src/database";
import dashboardUI from "./dashboardUI";

export default function dashboardLogic({ visible, onClose, id }) {
  const [isVisible, setIsVisible] = useState(visible);
  const [formData, setFormData] = useState({
    entry: "_DummyEntry",
    id: "unique"
  });

  setFormData([{entry: "dummy", id: "unique"}])

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <dashboardUI
      //visible={isVisible}
      onChange={handleChange}
      data={formData}
    />
  );
}
