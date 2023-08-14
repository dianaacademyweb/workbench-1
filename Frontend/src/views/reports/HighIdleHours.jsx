import React, { useEffect, useState } from "react";
import DashApi from "../../dashboard/auth";
import Top from "./Top";
import Card from "../../components/card";

const HighIdleHours = () => {
  const [error, setError] = useState(undefined);
  const [idle, SetIdle] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [newemployeid, setSelecteemployeid] = useState([]);
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
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employelist(); // Call the function here
  }, []);

  const handleEmployeeClick = async (employeid) => {
    setSelecteemployeid(employeid);
    try {
      let response = await DashApi.IdleTime(employeid);

      SetIdle(response.data[0]);
      console.log(idle);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };
  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          HIGH IDLE HOURS
        </h1>
        <p className="py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          List of employees who have idle hours for last three months
        </p>
      </div>
      <div className="bg-white m-4 min-h-screen rounded-3xl  dark:bg-navy-900">
        <label className=" ml-4">
          <span className="mr-2 text-lightPrimary sm:text-xl   ">
            {" "}
            Select Employee
          </span>
          <select
            className="my-1 px-14 py-1  bg-lightgray  rounded-md text-lightPrimary  dark:bg-[#000] border-2 border-navy-700 sm:text-lg"
            onChange={(event) => handleEmployeeClick(event.target.value)}
          >
            <option className="dark:bg-[#4f4f504d] " value="">
              select employe
            </option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.employeid} className="">
                {employee.username}
              </option>
            ))}
          </select>
        </label>
        <div>
          <div className=" w-4/5 ml-5  mt-5  ">
            <Card extra=" p-[20px]">
              <div className="mt-8  text-xl  dark:border-white border-navy-400 rounded-md h-full">
                {idle && (
                  <div
                    className="justify-center grid grid-flow-row gap-3 mx-[70px] items-center text-lightPrimary dark:bg-navy-900 px-2 py-2  my-2"
                    key={idle.id}
                  >
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                          <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" class="px-6 py-4">
                                DATE
                              </th>
                              <th scope="col" class="px-6 py-4">
                                LOCALTIME
                              </th>
                              <th scope="col" class="px-6 py-4">
                                IDLETIME
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-b dark:border-neutral-500">
                              <td class="whitespace-nowrap px-6 py-4">
                                {idle.date}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {idle.localtime}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4">
                                {idle.idealtime}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {error}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighIdleHours;
