import React, { useEffect, useState } from "react";
import DashApi from "../../dashboard/auth";
import Top from "./Top";

const HighIdleHours = () => {
  const [error, setError] = useState(undefined);
  const [idle, SetIdle] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date from the input field

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
    setSelectedDate(""); // Clear selectedDate when changing employees
    try {
      let response = await DashApi.IdleTime(employeid);
      SetIdle(response);
      console.log(idle);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  // Function to count occurrences of selectedDate in the API data
  const countSelectedDateOccurrences = () => {
    if (idle && idle.data) {
      return idle.data.filter((item) => item.date === selectedDate).length * 16;
    }
    return 0;
  };

  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          HIGH IDLE HOURS
        </h1>
        <p className="py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          List of employees who have idle hours for the last three months
        </p>
      </div>
      <div className="bg-white m-4 min-h-screen rounded-3xl dark:bg-navy-900">
        <div className="p-4">
          <div className="flex gap-4">
            <div>
              <label className="block text-lightPrimary sm:text-xl">
                Select Employee
              </label>
              <select
                className="my-1 px-4 py-2 bg-lightPrimary rounded-md text-white dark:bg-[#000] border-2  sm:text-lg"
                onChange={(event) => handleEmployeeClick(event.target.value)}
              >
                <option className="dark:bg-[#4f4f504d] " value="">
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
            <div>
              <label className="block text-lightPrimary sm:text-xl">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                className="my-1 px-4 py-2 bg-lightPrimary rounded-md text-white dark:bg-[#000] border-2  sm:text-lg"
              />
            </div>
          </div>
        </div>
        <div>
        {selectedDate && (
              <div className="text-lightPrimary p-4">
                Selected Date ({selectedDate}) Total idle time in mins{" "}
                {countSelectedDateOccurrences()}
              </div>
            )}
          <div className="  ">
            {idle && (
              <div className="text-lightPrimary" key={idle.id}>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full  text-left text-sm ">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                              DATE
                            </th>
                            <th scope="col" className="px-6 py-4">
                              LOCALTIME
                            </th>
                            <th scope="col" className="px-6 py-4">
                              IDLETIME
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {idle.data
                            .slice(Math.max(idle.data.length - 10, 0))
                            .map((item) => (
                              <tr
                                key={item.id}
                                className="border-b dark:border-neutral-500"
                              >
                                <td className="whitespace-nowrap px-6 py-4">
                                  {item.date}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {item.localtime}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {item.idealtime}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {error}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighIdleHours;
