import React, { useState, useEffect } from "react";
import Top from "./Top";

const OtReport = () => {
  const [employeid, setSelecteemployeid] = useState([]);
  const [images, setImages] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [startDate, setStartDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

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

  const fetchImages = async () => {
    try {
      let response = await DashApi.screenimages(employeid);
      console.log(response);
      setImages(response.data);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  const handleEmployeeClick = async (employeid) => {
    try {
      let response = await DashApi.screenimages(employeid);
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
  return (
    <div>
      <Top />
      <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          OVERTIME REPORT
        </h1>
      </div>
      <div className="bg-white flex gap-10  dark:bg-navy-900 m-4 max-h-screen rounded-3xl">
        <label className=" items-center p-4">
          <select
            className="m-8 px-10 py-3   dark:text-navy-900 rounded-md text-black border border-gray-700 text-sm"
            value={employeid}
            onChange={(event) => handleEmployeeClick(event.target.value)}
          >
            <option className="w-16 text-lightPrimary" value="emplo">
              select employe
            </option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.employeid}>
                {employee.username}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-2 m-9 text-lightPrimary dark:bg-navy-900">
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="block md:w-full border text-white border-gray-700 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-lightPrimary  dark:bg-navy-900"
          />
        </label>
      </div>
    </div>
  );
};

export default OtReport;
