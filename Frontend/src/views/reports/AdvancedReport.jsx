import React, { useEffect, useState } from "react";
import DashApi from "../../dashboard/auth";
import Top from "./Top";
import { Bar } from "react-chartjs-2";

const AdvancedReport = () => {
  const [error, setError] = useState(undefined);
  const [idle, SetIdle] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [barChartData, setBarChartData] = useState({});
  const countDateRangeOccurrences = () => {
    if (idle && idle.data && startDate && endDate) {
      const occurrences = {};
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      const dateList = [];

      let currentDate = startDateObj;
      while (currentDate <= endDateObj) {
        dateList.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }

      dateList.forEach((date) => {
        occurrences[date] = idle.data.filter((item) => item.date === date).length * 16;
      });

      return occurrences;
    }
    return {};
  };
  useEffect(() => {
 
    setBarChartData({
      labels: Object.keys(countDateRangeOccurrences()),
      datasets: [
        {
          label: "Idle Time",
          data: Object.values(countDateRangeOccurrences()),
          backgroundColor: "rgba(75, 192, 192, 0.6)", 
        },
      ],
    });
  }, [countDateRangeOccurrences]);


  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist();
        setEmployees(response.data.employes);

        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (error) {
        if (error.response) {
          return setError(error.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employelist(); // Call the function here
  }, []);

  const handleEmployeeClick = async (employeid) => {
    setSelectedEmployeeId(employeid);
    setStartDate("");
    setEndDate(""); 
    try {
      let response = await DashApi.IdleTime(employeid);
      SetIdle(response);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  // const handleSubmit = async (employeid) => {
  //   setSelectedEmployeeId(employeid);
  //   if (startDate === "") {
  //     return setError("You must select the start date");
  //   }
  //   if (endDate === "") {
  //     return setError("You must select the end date");
  //   }
  //   try {
  //     let response = await DashApi.breakstart(employeid, {
  //       params: {
  //         start_date: startDate,
  //         end_date: endDate,
  //       },
  //     });
  //     console.log(response);
  //     setAttendanceReport(response.data);
      // let response2 = await DashApi.logoutreports(employeid, {
      //   params: {
      //     start_date: start_date,
      //     end_date: end_date,
      //   },
      // });
      // setLogoutreport(response2.data);
      // console.log(response2);
  //   } catch (error) {
  //     console.error("Error retrieving employee data:", error);
  //   }
  // };



  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl text-white  justify-between bg-lightgray dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black  dark:bg-navy-900 rounded-3xl">
          ADVANCED REPORT
        </h1>
      </div>
      <div className="bg-lightgray text-white dark:bg-navy-900 m-4 rounded-3xl  min-h-screen">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <label className="mb-2 block text-white sm:text-xl">
                Select Employee
              </label>
              <select
                className="my-1 px-4 py-2 bg-lightPrimary rounded-md text-white dark:bg-[#000] border-2  sm:text-lg w-full"
                onChange={(event) => handleEmployeeClick(event.target.value)}
              >
                <option className="dark:bg-[#4f4f504d]" value="">
                  Select Employee
                </option>
                {employees.map((employee) => (
                  <option
                    key={employee.id}
                    value={employee.employeid}
                    className=""
                  >
                    {employee.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-grow">
              <label className="mb-2 block text-white sm:text-xl">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="my-1 px-4 py-2 bg-lightPrimary rounded-md text-white dark:bg-[#000] border-2  sm:text-lg w-full"
              />
            </div>
            <div className="flex-grow">
              <label className="mb-2 block text-white sm:text-xl">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
                className="my-1 px-4 py-2 bg-lightPrimary rounded-md text-white dark:bg-[#000] border-2  sm:text-lg w-full"
              />
            </div>
          </div>
        </div>
        <div>
          {startDate && endDate && (
            <div>
              <div className="text-white text-center">
                IdleTime within Date Range ({startDate} - {endDate}):
              </div>
              <div className="w-full">
                <Bar
                  data={barChartData}
                  options={{
                    responsive: true,
                    scales: {
                      x: {
                        beginAtZero: true,
                      },
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
          {error}
        </div>
      </div>
    </div>
  );
};

export default AdvancedReport;
