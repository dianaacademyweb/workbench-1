import React, { useState, useEffect } from "react";

import Top from "./Top";
import { DashApi } from "../../components";

const AttendanceReport = () => {
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [employees, setEmployees] = useState([]);
  const [newemployeid, setSelecteemployeid] = useState("");

  const [attendanceReport, setAttendanceReport] = useState([]);
  const [logoutreport, setLogoutreport] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist();
        setEmployees(response.data.employes);

        if (response.data && response.data.success === true) {
          console.log(response);
          return setError(response.data.msg);
        }
      } catch (error) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employelist(); // Call the function here
  }, []);

  const handleSubmit = async (employeid) => {
    setSelecteemployeid(employeid);
    if (start_date === "") {
      return setError("You must select the start date");
    }
    if (end_date === "") {
      return setError("You must select the end date");
    }
    try {
      let response = await DashApi.attendanceReport(employeid, {
        params: {
          start_date: start_date,
          end_date: end_date,
        },
      });
      console.log(response);
      setAttendanceReport(response.data);
      let response2 = await DashApi.logoutreports(employeid, {
        params: {
          start_date: start_date,
          end_date: end_date,
        },
      });
      setLogoutreport(response2.data);
      console.log(response2);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  return (
    <div>
      <Top />

      <div className="md:flex mx-4 my-4 rounded-3xl justify-betwee bg-lightgray  dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-white dark:bg-navy-900 rounded-3xl dark:text-lightPrimary">
          ATTENDANCE REPORT
        </h1>

        <label className=" dark:bg-navy-900 text-lightPrimary m-2">
          starting date:
          <input
            type="date"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
            className="block md:w-full border-gray-300 dark:border dark:text-lightPrimary text-white dark:bg-navy-900 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>

        <label className="text-lightPrimary dark:bg-navy-900 m-2">
          End Date:
          <input
            type="date"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
            className="block md:w-full border-gray-300 text-white dark:bg-navy-900 dark:border dark:text-lightPrimary rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </label>
      </div>
      <div className="bg-lightgray  m-4 min-h-screen  dark:bg-navy-900 rounded-3xl">
        <div>
          <label className="">
            <span className="m-4 text-lightPrimary text-xl">
              Select Employee
            </span>
            <select
              className="my-1 px-14 py-3 bg-lightPrimary rounded-md text-white text-sm"
              onChange={(event) => handleSubmit(event.target.value)}
            >
              <option value="">select employe</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.employeid}>
                  {employee.username}
                </option>
              ))}
            </select>
          </label>
          <h1 className="text-red-600 text-xl">{error}</h1>
        </div>

        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 dark:text-lightPrimary">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="min-w-full  text-left text-sm ">
                {attendanceReport.length > 0 && (
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <h2 class="text-2xl font-bold mb-4 text-center">
                          Attendance Report
                        </h2>
                        <table className="min-w-full  text-left text-sm ">
                          <thead className="border-b font-medium dark:border-neutral-500 text-center">
                            <tr>
                              <th scope="col" className="px-4 py-2">Date</th>
                              <th scope="col" className="px-4 py-2">Login Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {attendanceReport.map((record) => (
                              <tr key={record.date} className="border-b text-center dark:border-neutral-500">
                                <td className=" px-4 py-4">{record.date}</td>
                                <td className=" px-4 py-4">
                                  {record.login_time}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div class="mt-3">
                {logoutreport.length > 0 && (
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <h2 class="text-2xl font-bold mb-4 text-center">Logout Report</h2>
                        <table className="min-w-full  text-left text-sm ">
                          <thead className="border-b font-medium dark:border-neutral-500 text-center">
                            <tr>
                              <th scope="col" class="px-4 py-2">
                                Date
                              </th>
                              <th scope="col" class="px-4 py-2">
                                Logout Time
                              </th>
                              <th scope="col" class="px-4 py-2">
                                End Report
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {logoutreport.map((logoutrecords) => (
                              <tr
                                key={logoutrecords.date}
                                className="border-b dark:border-neutral-500 text-center"
                              >
                                <td class=" px-4 py-4">
                                  {logoutrecords.date}
                                </td>
                                <td class=" px-4 py-4">
                                  {logoutrecords.logout_time}
                                </td>
                                <td class=" px-4 py-4">
                                  {logoutrecords.endreport}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;
