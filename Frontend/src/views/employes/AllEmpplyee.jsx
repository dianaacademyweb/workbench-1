import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import addemp from "./addemp.json"
import Lottie from "lottie-react";

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
        let response = await DashApi.Employelist();
        console.log(response);
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
  const handleEmployeeClick = async (employeeId) => {
    console.log(employeeId)
    try {
      let response = await DashApi.projectsdetails(employeeId);
      console.log(response);
      setEmployeeData(response.data);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  }; // Empty dependency array for the initial effect

  return (
    <div className="min-h-screen bg-lightPrimary py-10 mx-4 dark:bg-navy-900 mb-[200px] h-full ">
      <div className=" mt-4 py-2 flex w-full h-16 items-center bg-white dark:bg-navy-800  text-navy-700 rounded-full">
      
        <div className="flex dark:bg-navy-900  dark:border bg-lightPrimary rounded-full py-3 mx-2">
          <p className="pl-3 pr-2 text-xl  flex">
            <FiSearch className="h-4 w-4 text-white dark:text-lightPrimary align-center flex " />
          </p>
          <input
            type="text"
            placeholder="Search employee"
            className="px-4 flex h-full w-full rounded-full dark:text-lightPrimary bg-lightPrimary text-sm font-medium text-lightPrimary outline-none placeholder:!text-white dark:bg-navy-900  dark:placeholder:!text-white sm:w-fit"
          />
        </div>
      </div>


      <div className="flex flex-col sm:flex-row gap-1">
        <div className="mt-5 sm:w-1/5 ">
          <Card extra="p-[20px]">
            <div className=" mt-8 justify-center flex   rounded-md w-full h-full">
              <div className=" text-xl flex ">
             
                <button className="justify-center">
                  {" "}
                  {employees.map((employee) => (
                    <Link
                      className=" my-4 justify-center flex  items-center   text-white bg-lightPrimary  sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-md  dark:text-white "
                      key={employee.id}
                      onClick={() => handleEmployeeClick(employee.employeid)}
                      to={`${employee.employeid}`}
                    
                    >
                      <h1 className=" justify-center dark:text-white text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
                        {employee.username}{" "}
                      </h1>
                      {/* <span>{employee.e_email}</span> */}
                    </Link>
                  
                  
                  ))}
                </button>
                </div>

               
            </div>
          </Card>
        </div>{" "}
        <div className=" sm:w-4/5 sm:ml-5  mt-5  ">
          <Card extra=" p-[20px]">
            <div className="w-2/3">
                    <Lottie animationData={addemp}/>
                    </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Employe;
