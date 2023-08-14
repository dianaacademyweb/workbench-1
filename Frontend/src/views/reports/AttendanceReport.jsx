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

      <div className="md:flex mx-4 my-4 rounded-3xl justify-betwee bg-lightgray dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-white dark:bg-navy-900 rounded-3xl">
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
            <span className="m-4 text-lightPrimary text-xl"> Select Employee</span>
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
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div class="container mx-auto p-4">
                <div>
                  {attendanceReport.length > 0 && (
                    <div>
                      <h2 class="text-2xl font-bold mb-4">Attendance Report</h2>
                      <table class="table-auto w-full">
                        <thead>
                          <tr>
                            <th class="px-4 py-2">Date</th>
                            <th class="px-4 py-2">Login Time</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          {attendanceReport.map((record) => (
                            <tr key={record.date}>
                              <td class="border px-4 py-2">{record.date}</td>
                              <td class="border px-4 py-2">
                                {record.login_time}
                              </td>
                            
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div class="mt-8">
                  {logoutreport.length > 0 && (
                    <div>
                      <h2 class="text-2xl font-bold mb-4">Logout Report</h2>
                      <table class="table-auto w-full">
                        <thead>
                          <tr>
                            <th class="px-4 py-2">Date</th>
                            <th class="px-4 py-2">Logout Time</th>
                            <th class="px-4 py-2">End Report</th>
                            <th class="px-4 py-2">Total time </th>
                          </tr>
                        </thead>
                        <tbody>
                          {logoutreport.map((logoutrecords) => (
                            <tr key={logoutrecords.date}>
                              <td class="border px-4 py-2">
                                {logoutrecords.date}
                              </td>
                              <td class="border px-4 py-2">
                                {logoutrecords.logout_time}
                              </td>
                              <td class="border px-4 py-2">
                                {logoutrecords.endreport}
                              </td>
                              <td class="border px-4 py-2">
                                {logoutrecords.total_time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              <h1 className="text-red-600 text-xl">{error}</h1>

              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Employee
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Team
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Days Worked
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Off Days
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total Active Hours
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Avg Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">employee1</td>
                    <td className="whitespace-nowrap px-6 py-4">team1</td>
                    <td className="whitespace-nowrap px-6 py-4">Days</td>
                    <td className="whitespace-nowrap px-6 py-4">off days</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      active hours
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">avg</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">employee2</td>
                    <td className="whitespace-nowrap px-6 py-4">team2</td>
                    <td className="whitespace-nowrap px-6 py-4">Days</td>
                    <td className="whitespace-nowrap px-6 py-4">off days</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      active hours
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">avg</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">employee3</td>
                    <td className="whitespace-nowrap px-6 py-4">team3</td>
                    <td className="whitespace-nowrap px-6 py-4">Days</td>
                    <td className="whitespace-nowrap px-6 py-4">off days</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      active hours
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">avg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;
