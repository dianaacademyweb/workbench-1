import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import { Link } from "react-router-dom";

function Listproject() {
  const [error, setError] = useState(undefined);
  const [project, SetListProject] = useState([]);

  useEffect(() => {
    const Projectlist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.ListProject({});
        SetListProject(response.data);
        console.log(response);
        if (response.data && response.data.success === false) {
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

    Projectlist(); // Call the function here
  }, []); // Empty dependency array for the initial effect

  return (
    <div className="bg-lightPrimary py-10 dark:bg-navy-900 mb-[200px] h-full ">
      <div className="  py-2 flex w-full h-16 items-center bg-white dark:bg-navy-800  text-navy-700 rounded-full">
        <div className="flex  dark:bg-navy-900 rounded-full py-3 mx-2">
          <p className="pl-3 pr-2 text-xl  flex">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white  align-center flex " />
          </p>
          <input
            type="text"
            placeholder="Search employe"
            className="px-4 flex h-full w-full rounded-full  bg-white text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
      </div>
     

      <div className="mx-5 border-2 bg-lightgray  rounded-md w-[300px] h-[450px]">
        <ul className=" text-xl  justify-center">
          <button className="justify-center  ">
   
            {project.map((project) => (
              <Link
                className="justify-center bg-lightPrimary flex mx-[70px] items-center     px-2 py-2 border-2 dark:border-white  rounded-md my-2"
                key={project.id}
                to={`${project.id}`}
              >
                <span className=" justify-center">
                  {project.project_name}
                </span>
              </Link>
            ))}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Listproject;
