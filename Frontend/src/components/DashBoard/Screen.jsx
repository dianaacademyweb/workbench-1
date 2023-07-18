import React, { useState, useEffect } from "react";
import DashApi from "../../dashboard/auth";

const ScreenshotsRow = () => {
  const [error, setError] = useState(undefined);
  const [employees, setEmployees] = useState([]);
  const [employeid, setSelecteemployeid] = useState([]);
  const [images, setImages] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleHover = () => {
      setIsHovered(!isHovered);
    };

    const imageElement = document.querySelector('.image-zoom');

    if (imageElement) {
      imageElement.addEventListener('mouseenter', handleHover);
      imageElement.addEventListener('mouseleave', handleHover);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mouseenter', handleHover);
        imageElement.removeEventListener('mouseleave', handleHover);
      }
    };
  }, [isHovered]);

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
      <div>
        <label>
          Select employee
          <select
            className="my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm"
            value={employeid}
            onChange={(event) => handleEmployeeClick(event.target.value)}
          >
            <option value=""></option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.employeid}>
                {employee.username}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4  ">
  {images.map((item) => (
    
    <div   key={item.id}>
    <p className="flex text-xl text-navy-800 dark:text-gray-200">{item.time}</p>
   <div className="flex  border-navy-800 border-2 dark:border-gray-700 rounded-lg" >
   
      <img className="mx-auto px-2 py-2  w-full h-auto"
        
        src={`https://sentinel.www.dianasentinel.com${item.image}`}
        alt={`Image ${item.id}`} 
      />
   </div>
      
    </div>
  ))}
</div>

    </div>
  );
};

export default ScreenshotsRow;
