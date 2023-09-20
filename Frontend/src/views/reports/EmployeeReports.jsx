import React, { useState, useEffect } from "react";
import Top from "./Top";
import DashApi from "../../dashboard/auth";
import { IMAGE_API } from "../../config/constant";
import Card from "../../components/card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from 'styled-components';

import { ClipLoader } from "react-spinners";
// import EmployeesDropdown from './EmployeesDropdown'; // Assume this file provides employee data
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  subDays,
  getDay,
} from "date-fns";

const EmployeeReports = () => {
  const [isLoading, setIsLoading] = useState(true);
  const override = css`
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    border-color: brown;
  `;
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState("");
  const [employeid, setSelecteemployeid] = useState([]);
  const [images, setImages] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch initial data
    fetchImages();

    // Call the API every minute
    const intervalId = setInterval(fetchImages, 60000); // 1 minute in milliseconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist();
        setEmployees(response.data.employes);
        console.log(response);

        if (response.data && response.data.success === true) {
          console.log(response);
          toast.error(response.data.msg);
        }
      } catch (error) {
        console.log(err);
        if (err.response) {
          toast.error(err.response.data.msg);

          console.error("Error retrieving employee data:", error);
        }
      }

      const handleEmployeeClick = async (employeid) => {
        setSelecteemployeid(employeid);
        try {
          let response = await DashApi.screenimages(employeid);
          console.log(response);
          setImages(response.data);

          console.log(employeid);
        } catch (error) {
          console.error("Error retrieving employee data:", error);
        }
      };

      images.map((item) => (
        <img
          className=" mx-3 mr-3 my-5  w-[200px] h-[100px]"
          key={item.id}
          src={`${IMAGE_API}${item.image}`}
          alt={`Image ${item.id}`}
        />
      ));

      const handlePrevMonth = () => {
        setSelectedMonth((prevMonth) => subMonths(prevMonth, 1));
      };

      const handleNextMonth = () => {
        setSelectedMonth((prevMonth) => addMonths(prevMonth, 1));
      };

      const getDatesOfMonth = () => {
        const startOfMonth = startOfWeek(selectedMonth);
        const dates = [];
        for (let i = 0; i < 7; i++) {
          dates.push(addDays(startOfMonth, i));
        }
        return dates;
      };
      const handlePrevWeek = () => {
        setSelectedDate(subDays(selectedDate, 7));
      };

      const handleNextWeek = () => {
        setSelectedDate(addDays(selectedDate, 7));
      };

      const getWeekDates = () => {
        const startOfWeekDate = startOfWeek(selectedDate);
        const dates = [];
        for (let i = 0; i < 7; i++) {
          dates.push(addDays(startOfWeekDate, i));
        }
        toast.error("There has been an error.");
      };
    };

    Employelist(); // Call the function here
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      let response = await DashApi.screenimages(employeid);
      console.log(response);
      setImages(response.data);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmployeeClick = async (employeid) => {
    try {
      let response = await DashApi.allscreenimages(employeid);
      console.log(response);
      setImages(response.data);
      setSelecteemployeid(event.target.value);
      console.log(employeid);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  images.map((item) => (
    <img
      className=" mx-3 mr-3 my-5  w-[200px] h-[100px]"
      key={item.id}
      src={`https://sentinel.www.dianasentinel.com${item.image}`}
      alt={`Image ${item.id}`}
    />
  ));

  const handlePrevMonth = () => {
    setSelectedMonth((prevMonth) => subMonths(prevMonth, 1));
  };

  const handleNextMonth = () => {
    setSelectedMonth((prevMonth) => addMonths(prevMonth, 1));
  };

  const getDatesOfMonth = () => {
    const startOfMonth = startOfWeek(selectedMonth);
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(startOfMonth, i));
    }
    return dates;
  };
  const handlePrevWeek = () => {
    setSelectedDate(subDays(selectedDate, 7));
  };

  const handleNextWeek = () => {
    setSelectedDate(addDays(selectedDate, 7));
  };

  const getWeekDates = () => {
    const startOfWeekDate = startOfWeek(selectedDate);
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(startOfWeekDate, i));
    }
    return dates;
  };
  return (
    <div>
      <Top />
      <Card>
        <div className="flex mx-4 my-4 rounded-3xl justify-between dark:border-white dark:border">
          <h1 className="text-2xl py-6 px-4 text-black  dark:text-lightPrimary dark:bg-navy-900 rounded-3xl">
            EMPLOYEE REPORTS
          </h1>
        </div>
      </Card>

      <div className="lg:flex gap-4 p-4">
        <div className="box  bg-lightgray rounded-3xl dark:bg-navy-900 dark:text-lightPrimary lg:w-1/3">
          <div className="items-center justify-between  dark:bg-navy-900 dark:text-lightPrimary p-4">
            <label className="flex justify-center items-center ">
              <select
                className="  my-1 px-10 py-3 dark:bg-white dark:text-lightPrimary rounded-md text-white text-sm"
                value={employeid}
                onChange={(event) => handleEmployeeClick(event.target.value)}
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

        <div className="box bg-lightgray rounded-3xl dark:bg-navy-900 dark:text-lightPrimary lg:w-1/3">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-navy-900 dark:text-lightPrimary p-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {"<"}
            </button>
            <div>{format(selectedMonth, "MMMM yyyy")}</div>
            <button
              onClick={handleNextMonth}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {">"}
            </button>
          </div>
        </div>

        <div className="box bg-lightgray rounded-3xl dark:bg-navy-900 dark:text-lightPrimary lg:w-2/3">
          <div className="flex items-center justify-between dark:bg-navy-900 dark:text-lightPrimary bg-gray-100 p-4">
            <button
              onClick={handlePrevWeek}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {"<"}
            </button>
            <div className="flex lg:text-md lg:gap-4 ">
              {getWeekDates().map((date, index) => (
                <div key={index}>
                  {format(date, "dd/MM")}
                  <div className="text-xs ">{format(date, "eee")}</div>
                </div>
              ))}
            </div>
            <button
              onClick={handleNextWeek}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-lightgray min-h-screen text-white dark:bg-navy-900 dark:text-lightPrimary rounded-3xl m-4">
        <ul className="md:flex justify-center md:justify-between m-6 text-xl pt-4">
          <li>
            <a
              href=""
              className={`${
                selectedItem === "screens"
                  ? "underline text-blue-500"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("screens")}
            >
              SCREENS
            </a>
          </li>
          <li>
            <a
              href=""
              className={`${
                selectedItem === "tasks"
                  ? "underline text-blue-500"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("tasks")}
            >
              TASKS
            </a>
          </li>
          <li>
            <a
              href=""
              className={`${
                selectedItem === "analysis"
                  ? "underline text-blue-500"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("analysis")}
            >
              ANALYSIS
            </a>
          </li>
          <li>
            <a
              href=""
              className={`${
                selectedItem === "monitoring"
                  ? "underline text-blue-500"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("monitoring")}
            >
              MONITORING ACTIONS
            </a>
          </li>
          <li>
            <a
              href=""
              className={`${
                selectedItem === "breaks"
                  ? "underline text-blue-500"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("breaks")}
            >
              BREAKS & MEETINGS
            </a>
          </li>
        </ul>

        <hr className="m-6" />
       
          {isLoading?(
            <ClipLoader color={'#123abc'} loading={isLoading} className="flex justify-center items-center" css={override} size={150} />
          ):(
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 " >
            {images.map((item) => (
              <div key={item.id}>
                <p className="flex text-xl text-navy-800 dark:text-gray-200">
                  {item.time}
                </p>
                <div className="flex  border-navy-800 border-2 dark:border-gray-700 rounded-lg">
                  <img
                    className="mx-auto px-2 py-2  w-full h-auto"
                    src={`${IMAGE_API}${item.image}`}
                    alt={`Image ${item.id}`}
                  />
                </div>
              </div>
            ))}
            </div>
          )}
          
        
      </div>
    </div>
  );
};

export default EmployeeReports;
