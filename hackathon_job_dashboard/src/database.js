export const sendDataToDatabase = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/application/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    console.log("Data successfully sent to the database:", responseData);
  } catch (error) {
    console.error("Error sending data to the database:", error);
  }
};
