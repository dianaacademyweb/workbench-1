import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from "../card/index";
import { DOAMINAPI } from "../../config/constant";
import { Link, useNavigate } from "react-router-dom";

function Employe() {
  const [error, setError] = useState(undefined);
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState(null);
  const navigate = useNavigate();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

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

    Employelist();
  }, []);
  const handleEmployeeClick = async (Id) => {
    if (Id == null) {
      console.log("select");
    } else {
      try {
        let response = await DashApi.IdleTime(Id);

        setEmployeeData(response);
        console.log(employeeData);
      } catch (error) {
        console.error("Error retrieving employee data:", error);
      }
    }
  };

  return (
    <div className="mx-1">
      <div className="  mt-4 flex h-16 items-center  text-white rounded-full dark:bg-[#4f4f504d] bg-lightgray py-2 ">
        <div className="flex dark:bg-navy-900  rounded-full  py-2 mx-2">
          <p className="pl-3 py-2  pr-2 text-xl  flex">
            <FiSearch className="h-4 w-4 text-lightPrimary dark:text-darktext  align-center flex  " />
          </p>
          <input
            type="text"
            placeholder="Search employe"
            className="px-4  py-3 flex h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-white outline-none placeholder:!text-white  dark:bg-navy-900 dark:text-darktext dark:placeholder:!text-darktext sm:w-fit"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-1 mt-5">
        <div className=" md:w-2/5 mt-1 ">
          <Card extra="md:p-2">
            <div className=" mt-2 justify-center flex  dark:border-white  rounded-md w-full h-full">
              <div className=" text-lg flex ">
                <button className="justify-center  dark:bg-navy-800 px-2 py-2 rounded-lg ">
                  {employees.map((employee) => (
                    <Link
                      className={`my-2 justify-center flex items-center text-white ${
                        employee.employeid === selectedEmployeeId
                          ? "bg-blue-500 border-blue-500 "
                          : "bg-lightPrimary dark:bg-[#4f4f504d] border-navy-400 dark:border-white"
                      } border-sm px-2 sm:border-1 xs:border-0.5 rounded-xl dark:text-darktext`}
                      key={employee.employeid}
                      onClick={() => {
                        handleEmployeeClick(employee.employeid);
                        setSelectedEmployeeId(employee.employeid);
                      }}
                    >
                      <h1 className="justify-center dark:text-darktext   md:text-lg xl:text-2xl md:text-sx px-2 py-2">
                        {employee.username}
                      </h1>
                    </Link>
                  ))}
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:w-4/5  mt-1">
          <Card extra="p-[20px]">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-3 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  {employeeData !== null ? (
                    <table class="min-w-full text-left text-sm dark:text-lightPrimary">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" class="px-4 py-4">
                            DATE
                          </th>
                          <th scope="col" class="px-4 py-4">
                            LOCALTIME
                          </th>
                          <th scope="col" class="px-4 py-4">
                            IDLETIME
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employeeData.data
                          .slice(Math.max(employeeData.data.length - 6, 0))
                          .map((item) => (
                            <tr
                              key={item.id}
                              className="border-b dark:border-neutral-500"
                            >
                              <td className="whitespace-nowrap px-4 py-4">
                                {item.date}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                {item.localtime}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                {item.idealtime}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center dark:text-lightPrimary">
                      Select the employe to show data
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Employe;
