import React, { useState } from "react";
import Top from "./Top";
import { useEffect } from "react";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import file from "./file.json"
import Lottie from "lottie-react";
const TopActivity = (props) => {
  let employeid = props.employeid;
  console.log(employeid);
  // const [selectedTeam, setSelectedTeam] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  const [activiti, setActivity] = useState([]);
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
          toast.error(response.data.msg);
        }
      } catch (error) {
        if (err.response) {
          toast.error(err.response.data.msg);
        }
        toast.error("There has been an error.");
      }
    };

    Employelist(); // Call the function here
  }, []);
  const handleEmployeeClick = async (employeid) => {
    setSelecteemployeid(employeid);
    try {
      let response = await DashApi.activities(employeid);

      setActivity(response.data);
      console.log(activiti);
    } catch (error) {
      toast.error("Error retrieving employee data:");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the selected team, start date, and end date
    console.log("Selected Team:", selectedTeam);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white  dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary  dark:text-lightPrimary dark:bg-navy-900 rounded-3xl">
          TOP ACTIVITY
        </h1>
      </div>
      <div className="bg-white m-4 min-h-screen text-lightPrimary  rounded-3xl dark:text-lightPrimary dark:bg-navy-900">
        <form onSubmit={handleSubmit} className="p-4 sm:flex  gap-8">
          <label className="block mb-2  dark:text-lightPrimary dark:bg-navy-900">
            Choose an Employee
            <select
              className="my-1 px-7 mx-2 py-1  bg-lightPrimary  rounded-md text-white  dark:bg-[#000] border-2 border-navy-700 sm:text-lg"
              onChange={(event) => handleEmployeeClick(event.target.value)}
            >
              <option className="dark:bg-[#4f4f504d] " value="">
                select employe
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
          </label>

          {/* <label className="block mb-2  dark:text-lightPrimary dark:bg-navy-900">
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="block md:w-full text-white dark:border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-lightPrimary dark:bg-navy-900"
        />
      </label>

      <label className="block mb-2 dark:text-lightPrimary dark:bg-navy-900">
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="block md:w-full text-white dark:border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-lightPrimary dark:bg-navy-900"
        />
        
      </label> */}

          {/* <button
        type="submit"
        className="px-6 py-1 border rounded-full hover:bg-lightPrimary hover:text-white dark:bg-lightPrimary dark:hover:bg-navy-800 dark:hover:text-lightPrimary dark:text-navy-800"
      >
        Submit
      </button> */}
        </form>
        <div className="min-h-screen bg-lightPrimary m-4 rounded-3xl shadow-2xl dark:text-lightPrimary dark:bg-navy-800">
          <div className="mt-4">
            <Card extra="  h-full dark:bg-[#4f4f504d] ">
              <h1 className=" mt-2 text-lightPrimary font-bold text-xl text-center">
                USER ACTIVITY
              </h1>

              <div className="py-4 px-8 ">
                {activiti.length > 0 ? ( // Check if activiti has data before rendering the table
                  <table className="table-auto w-full rounded-lg ">
                    <thead className="border-2 border-navy-600 ">
                      <tr className="rounded-lg">
                        <th className="border-2 rounded-lg border-navy-600 py-2 px-2 justify-center dark:text-darktext dark:bg-navy-800 bg-lightPrimary text-white">
                          screen count no
                        </th>
                        <th className="border-2 border-navy-600 py-2 px-2 justify-center bg-lightPrimary text-white dark:bg-navy-800 dark:text-darktext">
                          {" "}
                          screen name
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-2 ">
                      {activiti.map((task, index) => (
                        <tr
                          key={index}
                          className="border-2 border-navy-600 justify-center"
                        >
                          <td className="border-2 py-2 px-2  border-navy-600 justify-center dark:text-darktext dark:bg-navy-800 bg-lightPrimary text-white">
                            {task.screen_count}
                          </td>
                          <td className="border-2 py-2 px-2 border-navy-600  justify-center dark:text-darktext dark:bg-navy-800 bg-lightPrimary text-white">
                            {task.screen_name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  
                  <div>
                    <Lottie animationData={file}/>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopActivity;
