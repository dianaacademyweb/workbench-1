import React, { useState } from "react";
import Top from "./Top";
import EmployeeActivityReport from "./EmployeeActivityReport";

const ActivityPattern = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [employeeReport, setEmployeeReport] = useState("");

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the selected team, start date, and end date
    console.log("Selected Employee:", selectedEmployee);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    // Generate the dummy report based on the selected employee
    const report = generateReport(selectedEmployee);
    setEmployeeReport(report);

    setSubmitted(true);
  };

  const generateReport = (employee) => {
    // Generate the dummy report based on the employee
    // Replace this with your actual report generation logic
    if (employee === "employee1") {
      return "This is the employee report for Employee 1";
    } else if (employee === "employee2") {
      return "This is the employee report for Employee 2";
    } else if (employee === "employee3") {
      return "This is the employee report for Employee 3";
    }
    return "";
  };

  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          ACTIVITY PATTERN
        </h1>
      </div>
      <div className="bg-white m-4 text-lightPrimary min-h-screen rounded-3xl dark:text-white dark:bg-navy-900">
        <form onSubmit={handleSubmit} className="p-4 md:flex gap-8">
          <label className="block mb-2 bg-white dark:text-lightPrimary dark:bg-navy-900">
            Employee
            <select
              value={selectedEmployee}
              onChange={handleEmployeeChange}
              className="block md:w-full text-white dark:text-lightPrimary border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border dark:bg-navy-900 "
            >
              <option value="">-- Select Employee --</option>
              <option value="employee1">Employee 1</option>
              <option value="employee2">Employee 2</option>
              <option value="employee3">Employee 3</option>
            </select>
          </label>

          <label className="block mb-2  dark:text-lightPrimary dark:bg-navy-900">
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="block md:w-full text-white dark:text-lightPrimary dark:border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50  dark:bg-navy-900"
            />
          </label>

          <label className="block mb-2 dark:text-lightPrimary dark:bg-navy-900">
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="block md:w-full text-white border-gray-300  rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-lightPrimary dark:border dark:bg-navy-900"
            />
          </label>

          <button
            type="submit"
            className="px-6 py-1 border rounded-full hover:bg-lightPrimary hover:text-white dark:bg-lightPrimary dark:hover:bg-navy-800 dark:hover:text-lightPrimary dark:text-navy-800"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="bg-white min-h-screen m-8 shadow-2xl rounded-3xl dark:text-white dark:bg-navy-900">
            <p className="text-xl justify-center text-center">
              {employeeReport}
            </p>
            <EmployeeActivityReport />
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityPattern;
