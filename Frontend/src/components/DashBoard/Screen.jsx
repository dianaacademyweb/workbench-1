import React, { useState, useEffect } from "react";
import DashApi from "../../dashboard/auth";
import UserActivity from "./UserActivity";
import { IMAGE_API } from "../../config/constant";
const ScreenshotsRow = () => {
  const [error, setError] = useState(undefined);
  const [employees, setEmployees] = useState([]);
  const [newemployeid, setSelecteemployeid] = useState([]);
  const [images, setImages] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const handleHover = () => {
  //     setIsHovered(!isHovered);
  //   };

  //   const imageElement = document.querySelector('.image-zoom');

  //   if (imageElement) {
  //     imageElement.addEventListener('mouseenter', handleHover);
  //     imageElement.addEventListener('mouseleave', handleHover);
  //   }

  //   return () => {
  //     if (imageElement) {
  //       imageElement.removeEventListener('mouseenter', handleHover);
  //       imageElement.removeEventListener('mouseleave', handleHover);
  //     }
  //   };
  // }, [isHovered]);

  // useEffect(() => {
  //   // Fetch initial
  //   fetchImages(newemployeid);

  //   // Call the API every minute
  //   const intervalId = setInterval(fetchImages, 1000); // 1 minute in milliseconds

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, []);

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

  const fetchImages = async (newemployeid) => {
    try {
      let response = await DashApi.screenimages(newemployeid);
      console.log(response);
      setImages(response.data);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  const handleEmployeeClick = async (employeid) => {
    setSelecteemployeid(employeid);
    try {
      let response = await DashApi.screenimages(employeid);
      console.log(response);

      setImages(response.data);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  images.map((item) => (
    <img
      className=" mx-3 mr-3 my-5  w-[200px] h-[100px]"
      key={item.id}
      src={`${IMAGE_API}/${item.image}`}
      alt={`Image ${item.id}`}
    />
  ));

  return (
    <div className="pt-4">
      <div className="dark:bg-[#4f4f504d] rounded-lg">
        <label className=" ml-4">
          <span className="mr-2 text-white sm:text-xl dark:text-darktext  ">
            {" "}
            Select Employee
          </span>
          <select
            className="my-1 px-14 py-1  bg-lightgray  rounded-md text-white dark:text-lightPrimary dark:bg-[#000] border-2 border-navy-700 sm:text-lg"
            onChange={(event) => handleEmployeeClick(event.target.value)}
          >
            <option className="dark:bg-[#4f4f504d] " value="">
              select employee
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
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4  ">
        {images.map((item) => (
          <div key={item.id}>
            <p className="flex text-lg text-white dark:text-darktext ">
              {item.time}
            </p>
            <div className="flex  border-navy-800 border-2 dark:border-navy-700 rounded-lg">
              <img
                className="mx-auto px-2 py-2  w-full h-auto"
                src={`${IMAGE_API}${item.image}`}
                alt={`Image ${item.id}`}
              />
            </div>
          </div>
        ))}
      </div>
      <UserActivity employeid={newemployeid} />
    </div>
  );
};

export default ScreenshotsRow;
