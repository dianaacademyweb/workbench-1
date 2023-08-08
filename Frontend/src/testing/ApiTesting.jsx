import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const ApiTesting = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sentinel.www.dianasentinel.com/api/users/attendance")
      .then((response) => {
        const data = response.data;
        setAttendanceData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>EMPLOYEE ATTENADNCE</h1>
      {attendanceData.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Date: {item.date}</p>
          <p>Login Time: {item.login_time}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiTesting;
