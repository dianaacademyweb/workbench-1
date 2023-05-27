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
    <div className="grid grid-cols-2 grid-flow-row">
      <div className="h-[180px] w-[250px] ">
        <div className=" h-full items-center  text-navy-700 dark:bg-navy-900">
          <p className="pl-3 pr-2 text-xl  flex">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white align-center flex " />
          </p>
          <input
            type="text"
            placeholder="Search employe"
            className="px-4 py-2 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <div className=" mx-5 border-2 dark:border-white border-navy-400 rounded-md w-[300px] h-[450px]">
          <div className=" text-xl justify-center">
            <button className="justify-center ">
              {" "}
              {employees.map((employee) => (
                <li
                  className="justify-center flex mx-[70px] items-center   text-navy-700 dark:bg-navy-900 px-2 py-2 border-2 dark:border-white border-navy-400 rounded-md my-2"
                  key={employee.id}
                  onClick={() => handleEmployeeClick(employee.id)}
                >
                  <h1 className=" justify-center ">{employee.id}</h1>

                  <h1 className=" justify-center">{employee.e_name} </h1>
                  {/* <span>{employee.e_email}</span> */}
                </li>
              ))}
            </button>
          </div>
        </div>
      </div>
      <div className="flex tex-black">
        <div className="text-xl justify-center">
          {employeeData && (
            <div
              className="justify-center flex mx-[70px] items-center text-navy-700 dark:bg-navy-900 px-2 py-2 border-2 dark:border-white border-navy-400 rounded-md my-2"
              key={employeeData.id}
            >
              <h1 className="justify-center text-navy-400 ">
                id = {employeeData.id}
              </h1>
              <h1 className="justify-center text-navy-400 ">
                {" "}
                DAte ={employeeData.md_date}
              </h1>
              <h2 className="block text-navy-400">
                title = {employeeData.md_title}
              </h2>
              <h3 className="bloack text-navy-400">
                Time ={employeeData.md_total_time_seconds}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employe;
