import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from '../card/index'
import {DOAMINAPI} from "../../config/constant"
import { Link, useNavigate } from "react-router-dom";

function Employe() {
  const [error, setError] = useState(undefined);
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist();
        console.log(response)
        setEmployees(response.data.employes);

        if (response.data && response.data.success === true) {
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
  const handleEmployeeClick = async (employeeId ) => {
    if(employeeId == null){
      try {
        let response = await DashApi.MonitoringList(employeeId);
        console.log(response);
        setEmployeeData(response.data.employes);
      } catch (error) {
        console.error("Error retrieving employee data:", error);
      }

    }
    else{
      console.log("select")
    }
   
  }; // Empty dependency array for the initial effect

  return (
    <div className="mx-4">
       <div className="  mt-4 flex h-16 items-center  text-white rounded-full bg-white dark:bg-navy-800 py-2 ">
       <div className="flex dark:bg-navy-900 bg-white rounded-full  mx-2">
            <p className="pl-3 py-2  pr-2 text-xl  flex">
              <FiSearch className="h-4 w-4 text-lightPrimary dark:text-darktext  align-center flex  " />
            </p>
            <input
              type="text"
              placeholder="Search employe"
              className="px-4  py-2 flex h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-white outline-none placeholder:!text-white  dark:bg-navy-900 dark:text-darktext dark:placeholder:!text-darktext sm:w-fit"
            />
            </div>
           </div> 




      <div className="flex gap-1 mt-5">
        <div className=" w-2/5 mt-5 ">
      <Card extra="p-2">
        <div className=" mt-2 justify-center flex  dark:border-white  rounded-md w-full h-full">
            <div className=" text-lg flex ">
              <button className="justify-center dark:bg-navy-800 px-2 py-2 rounded-lg ">
                {" "}
                {employees.map((employee) => (
                  <Link
                    className=" my-2 justify-center flex  items-center   text-white   bg-lightPrimary  dark:bg-[#4f4f504d] border-sm px-2 sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-xl  dark:text-darktext "
                    key={employee.id}
                    onClick={() => handleEmployeeClick(employee.id)}
                    // to={`${DOAMINAPI}/employee/${employee.employeid}`}
                  >

                    <h1 className=" justify-center dark:text-darktext text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
                    {employee.username}{" "}
                    </h1>
                    
                  </Link>
                ))}
              </button>
            </div>


          </div>
          </Card>
        </div>

        <div className=" w-4/5 ml-5 mt-5 ">
        <Card extra=" p-[20px]">
        <div className="mt-8  text-xl  dark:border-white border-navy-400 rounded-md h-full">
            {employeeData && (
              <div
                className=" grid grid-flow-row justify-center  mx-[70px] items-center text-navy-700 dark:bg-navy-900 px-2 py-2  my-2"
                key={employeeData.id}
              >
                <h1 className="justify-center text-navy-900 dark:text-darktext">
                  id = {employeeData.id}
                </h1>
                <h1 className="justify-center text-navy-900 dark:text-darktext ">
                  {" "}
                  DAte ={employeeData.md_date}
                </h1>
                <h2 className="block text-navy-900 dark:text-darktext">
                  title = {employeeData.md_title}
                </h2>
                <h3 className="bloack text-navy-900 dark:text-darktext">
                  Time ={employeeData.md_total_time_seconds}
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
