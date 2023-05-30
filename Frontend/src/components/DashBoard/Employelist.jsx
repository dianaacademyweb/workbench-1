import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";

function Employe() {
  const [error, setError] = useState(undefined);
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist({});
        setEmployees(response.data);

        if (response.data && response.data.success === true) {
          console.log(response);
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employelist(); // Call the function here
  }, []);
  const handleEmployeeClick = async (employeeId) => {
    try {
      let response = await DashApi.MonitoringList(employeeId);
      console.log(response);
      setEmployeeData(response.data[0]);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  }; // Empty dependency array for the initial effect

  return (
    <div>
       <div className=" mt-4 flex h-16 items-center  text-navy-700 rounded-full dark:bg-navy-700 py-2 ">
            <p className="pl-3 pr-2 text-xl  flex">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white  align-center flex " />
            </p>
            <input
              type="text"
              placeholder="Search employe"
              className="px-4 flex h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-800 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
            </div>




      <div className="flex gap-1">
        <div className="h-full   w-1/5 ">
          <div className=" mt-8 justify-center flex border-2 dark:border-white border-navy-400 rounded-md w-full h-full">
            <div className=" text-xl flex ">
              <button className="justify-center  ">
                {" "}
                {employees.map((employee) => (
                  <li
                    className=" my-4 justify-center flex  items-center   text-navy-700 dark:bg-navy-700  border-2 sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-md  dark:text-white "
                    key={employee.id}
                    onClick={() => handleEmployeeClick(employee.id)}
                  >

                    <h1 className=" justify-center dark:text-white text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
                    {employee.e_name}{" "}
                    </h1>
                    {/* <span>{employee.e_email}</span> */}
                  </li>
                ))}
              </button>
            </div>
          </div>
        </div>

        <div className=" h-[300px] w-4/5 ml-5 ">
          <div className="mt-8  text-xl border-2 dark:border-white border-navy-400 rounded-md h-full">
            {employeeData && (
              <div
                className=" grid grid-flow-row justify-center  mx-[70px] items-center text-navy-700 dark:bg-navy-900 px-2 py-2  my-2"
                key={employeeData.id}
              >
                <h1 className="justify-center text-navy-900 dark:text-white">
                  id = {employeeData.id}
                </h1>
                <h1 className="justify-center text-navy-900 dark:text-white ">
                  {" "}
                  DAte ={employeeData.md_date}
                </h1>
                <h2 className="block text-navy-900 dark:text-white">
                  title = {employeeData.md_title}
                </h2>
                <h3 className="bloack text-navy-900 dark:text-white">
                  Time ={employeeData.md_total_time_seconds}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employe;
