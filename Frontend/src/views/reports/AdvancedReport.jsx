import React, { useState } from "react";
import Top from "./Top";

const AdvancedReport = () => {
  const [selectedOption, setSelectedOption] = useState("teams");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectedTeam("");
    setSelectedEmployee("");
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const renderForm = () => {
    if (selectedOption === "teams") {
      return (
        <div>
          <label className="block mb-2 dark:text-white dark:bg-navy-900">
            Choose a team:
          </label>
          <select
            className="border border-gray-300 dark:text-white dark:bg-navy-900 rounded p-2"
            value={selectedTeam}
            onChange={handleTeamChange}
          >
            <option value="">Select a team</option>
            {/* Add your team options here */}
          </select>
        </div>
      );
    } else if (selectedOption === "employees") {
      return (
        <div>
          <label className="block dark:text-white dark:bg-navy-900 mb-2">
            Choose an employee:
          </label>
          <select
            className="border border-gray-300 dark:text-white dark:bg-navy-900 rounded p-2"
            value={selectedEmployee}
            onChange={handleEmployeeChange}
          >
            <option value="">Select an employee</option>
            {/* Add your employee options here */}
          </select>
        </div>
      );
    }
  };

  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          ADVANCED REPORT
        </h1>
      </div>
      <div className="bg-white dark:text-white dark:bg-navy-900 m-4 rounded-3xl  min-h-screen">
        <div className="m-8 mt-4">
          <div className="md:flex items-center mb-4">
            <input
              type="radio"
              id="teams"
              value="teams"
              checked={selectedOption === "teams"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="teams"
              className="ml-2 dark:text-white dark:bg-navy-900 mr-4"
            >
              Teams
            </label>
            <input
              type="radio"
              id="employees"
              value="employees"
              checked={selectedOption === "employees"}
              onChange={handleOptionChange}
              className="dark:text-white dark:bg-navy-900"
            />
            <label htmlFor="employees" className="ml-2">
              Employees
            </label>
            <label className="block mb-2 m-8">
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="block md:w-full border-gray-300 rounded-md dark:text-white dark:bg-navy-900 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>

            <label className="block mb-2 m-8">
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="block md:w-full border-gray-300 rounded-md dark:text-white dark:bg-navy-900 shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
              />
            </label>

            <button
              type="submit"
              className="px-6 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
          {renderForm()}
          {/* Additional report content */}
        </div>
      </div>
    </div>
  );
};

export default AdvancedReport;
