import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card";

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
      let response = await DashApi.projectsdetails(employeeId);
      console.log(response);
      setEmployeeData(response.data);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  }; // Empty dependency array for the initial effect

  return (
    <div className="min-h-screen bg-blue-100 py-10 mx-4 dark:bg-navy-900 mb-[200px] h-full ">
      <div className=" mt-4 py-2 flex w-full h-16 items-center bg-white dark:bg-navy-800  text-navy-700 rounded-full">
      
        <div className="flex dark:bg-navy-900 rounded-full py-3 mx-2">
          <p className="pl-3 pr-2 text-xl  flex">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white  align-center flex " />
          </p>
          <input
            type="text"
            placeholder="Search employe"
            className="px-4 flex h-full w-full rounded-full  bg-white text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
      </div>


      <div className="flex gap-1">
        <div className="mt-5 w-1/5 ">
          <Card extra="p-[20px]">
            <div className=" mt-8 justify-center flex  dark:border-white border-navy-400 rounded-md w-full h-full">
              <div className=" text-xl flex ">
                <button className="justify-center">
                  {" "}
                  {employees.map((employee) => (
                    <li
                      className=" my-4 justify-center flex  items-center   text-navy-700 dark:bg-navy-700 sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-md  dark:text-white "
                      key={employee.id}
                      onClick={() => handleEmployeeClick(employee.id)}
                    >
                      <h1 className=" justify-center dark:text-white text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
                        {employee.username}{" "}
                      </h1>
                      {/* <span>{employee.e_email}</span> */}
                    </li>
                  ))}
                </button>
              </div>
            </div>
          </Card>
        </div>{" "}
        <div className=" w-4/5 ml-5  mt-5  ">
          <Card extra=" p-[20px]">
            <div className="mt-8  text-xl  dark:border-white border-navy-400 rounded-md h-full">
              {employeeData && (
                <div
                  className="justify-center grid grid-flow-row gap-3 mx-[70px] items-center text-navy-700 dark:bg-navy-900 px-2 py-2  my-2"
                  key={employeeData.id}
                >
                  <h1 className="justify-center text-navy-900 dark:text-white">
                    id = {employeeData.id}
                  </h1>
                  <h1 className="justify-center text-navy-900 dark:text-white ">
                    {" "}
                    Date ={employeeData.username}
                  </h1>
                  <h2 className="block text-navy-900 dark:text-white">
                    title = {employeeData.e_address}
                  </h2>
                  <h3 className="block text-navy-900 dark:text-white">
                    Time ={employeeData.e_gender}
                  </h3>
                  <h3 className="block text-navy-900 dark:text-white">
                    contact = {employeeData.e_contact}
                  </h3>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Employe;
