import React, { useState, useEffect } from "react";
import PopupDialogUI from "./PopupDialogUI";
import { get_job_from_id, create_job_data, edit_job } from "../../src/database";

export default function PopupDialogLogic({ visible, onClose, id }) {
  const [isVisible, setIsVisible] = useState(visible);
  const [formData, setFormData] = useState({
    company_name: "",
    position: "",
    date: "",
    status: "APPLIED",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await get_job_from_id(id);
        if (data) {
          setFormData({
            company_name: data.company_name || "",
            position: data.position || "",
            date: data.date || "",
            status: data.status || "APPLIED",
          });
        }
      }
    };
    fetchData();
  }, [id]);

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
    if (id) {
      edit_job(id, formData); // Send the form data to the database
    } else {
      create_job_data(formData); // Send the form data to the database
    }
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
