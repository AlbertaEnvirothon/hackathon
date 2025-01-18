import React, { useState, useEffect } from "react";
import DashboardUI from "./dashboardUI";
import { get_jobs } from "../../src/database";

export default function DashboardLogic() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobs = await get_jobs();
      console.log("Jobs:", jobs);
      setData(jobs);
    };
    fetchData();
  }, []);

  return <DashboardUI data={data} />;
}
