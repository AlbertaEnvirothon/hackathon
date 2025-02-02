export const create_job_data = async (data) => {
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

export const edit_job = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:8000/application/${id}/`, {
      method: "PUT",
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

export const get_jobs = async () => {
  try {
    const response = await fetch("http://localhost:8000/applications/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
    console.log("Data successfully sent to the database:", responseData);
  } catch (error) {
    console.error("Error sending data to the database:", error);
  }
};

export const get_job_from_id = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/application/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Data successfully retrieved from the database:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    return [];
  }
};
