import React, { useState, useEffect } from "react";
import Top from "./Top";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashApi } from "../../components";

const ClientAppActivity = () => {
  const [date, setDate] = useState("");
  const [employeid, setSelecteemployeid] = useState("");

  const [employees, setEmployees] = useState([]);
  const [tableData, setTableData] = useState({ headings: [], rows: [] });



  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist();
        setEmployees(response.data.employes);
        console.log(employees)
        if (response.data && response.data.success === true) {
          console.log(response);
          toast.error(response.data.msg);
        }
      } catch (error) {
        console.log(err);
        if (err.response) {
          toast.error(err.response.data.msg);
        }
        toast.error("There has been an error.");
      }
    };

    Employelist(); // Call the function here
  }, []);

  const handleSubmit = async (employeid) => {
    setSelecteemployeid(employeid);
    if (date === "") {
      toast.error("You must select the start date");
    }

    try {
      let response = await DashApi.totaltime(employeid, {
        params: {
          date: date,
        },
      });
      console.log(response.data.results);
      if (response.data.results && response.data.results.length > 0) {
        const headings = Object.keys(response.data.results[0]);
        setTableData({
          headings: headings,
          rows: response.data.results,
        });
      } else {
        toast.error("No data available for the selected employee and date.");
        setTableData({
          headings: [],
          rows: [],
        });
      }
    } catch (error) {
      toast.error("Error retrieving employee data:", error);
    }
  };
  return (
    <div>
      <Top />
      <div className="flex sm:flex-row flex-col mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary   dark:bg-navy-900 rounded-3xl">
          CLIENT APP ACTIVITY REPORT
        </h1>
        <div className="items-center justify-between  dark:bg-navy-900  p-4">
          <label className="flex sm:flex-row flex-col justify-center items-center ">
            <label className=" dark:bg-navy-900 flex items-center text-lightPrimary m-2">
              date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block dark:text-white mx-2 md:w-full border border-gray-300 dark:border-darktext  text-white rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </label>
            <select
              className="  my-1 px-14 py-3 border border-gray-500 dark:bg-navy-900 dark:text-lightPrimary  rounded-md text-sm"
              value={employeid}
              onChange={(event) => handleSubmit(event.target.value)}
            >
              <option className="w-16" value="emplo">
                select employe
              </option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.employeid}>
                  {employee.username}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="bg-white overflow-x-auto min-h-screen text-lightPrimary dark:bg-navy-900  rounded-3xl m-4">
       
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            {tableData.headings.map((heading, index) => (
              <th key={index} scope="col" className="px-6 py-4">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b dark:border-neutral-500">
              {tableData.headings.map((heading, colIndex) => (
                <td key={colIndex} className="whitespace-nowrap px-6 py-4">
                  {row[heading]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAppActivity;
