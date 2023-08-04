import React, { useState, useEffect } from "react";
import Top from "./Top";

const ClientAppActivity = () => {
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
        <h1 className="text-2xl py-6 px-4 text-lightPrimary   dark:bg-navy-900 rounded-3xl">
          CLIENT APP ACTIVITY REPORT
        </h1>
        <div className="items-center justify-between  dark:bg-navy-900  p-4">
          <label className="flex justify-center items-center ">
            <select 
              className="  my-1 px-14 py-3 border border-gray-500 dark:bg-navy-900 dark:text-lightPrimary  rounded-md text-sm"
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
      <div className="bg-white min-h-screen text-lightPrimary dark:bg-navy-900  rounded-3xl m-4">
        <div className="flex justify-center items-center p-4">
          EMPLOYEE NAME HERE
        </div>
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    IP
                  </th>
                  <th scope="col" class="px-6 py-4">
                    LOGIN TIME
                  </th>
                  <th scope="col" class="px-6 py-4">
                    LOGOUT TIME
                  </th>
                  <th scope="col" class="px-6 py-4">
                    DEVICE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4">ip address</td>
                  <td class="whitespace-nowrap px-6 py-4">login time here</td>
                  <td class="whitespace-nowrap px-6 py-4">log out time</td>
                  <td class="whitespace-nowrap px-6 py-4">device name</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4">ip address</td>
                  <td class="whitespace-nowrap px-6 py-4">login time here</td>
                  <td class="whitespace-nowrap px-6 py-4">log out time</td>
                  <td class="whitespace-nowrap px-6 py-4">device name</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4">ip address</td>
                  <td class="whitespace-nowrap px-6 py-4">login time here</td>
                  <td class="whitespace-nowrap px-6 py-4">log out time</td>
                  <td class="whitespace-nowrap px-6 py-4">device name</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAppActivity;
