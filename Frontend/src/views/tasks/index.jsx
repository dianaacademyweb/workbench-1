import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import EmployeTaskpage from "./EmployeTaskpage";

import { FiInfo, FiCheckCircle, FiX, FiCheck } from "react-icons/fi";
import Employe from "../../components/DashBoard/Employelist";
function Task() {
  const usertype = localStorage.getItem("type");
  return (
    <div className="  text-lightPrimary  bg-lightPrimary dark:bg-navy-900 ">
      <Navbar />
      <div className="mt-14 justify-center flex">
      {usertype === "employe"&&  <EmployeTaskpage/>}



        {usertype === "organization" && (
           <div>
          <button className="px-3 py-3 bg-gray-300 mx-10  text-navy-900 dark:bg-navy-800 rounded-lg">
            <Link
              className="mx-5 px-5 py -5 text-navy-800 "
              to="addtask"
            >
              Add Task
            </Link>
          </button>

          <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black   dark:bg-navy-900 rounded-3xl">
          TASKS
        </h1>
        <nav className="my-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className=" md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <FiInfo className="inline-block mr-2" />
                      Info
                    </a>
                    <a
                      href="#"
                      className="text-green-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <FiCheckCircle className="inline-block mr-2" />
                      Active
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-400 hover:text-white"
                    >
                      <FiX className="inline-block mr-2" />
                      Disabled
                    </a>
                    <a
                      href="#"
                      className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <FiCheck className="inline-block mr-2" />
                      Completed
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
          </div>
        )}
      </div>

      {usertype === "organization"&&   <Outlet />}
     
    </div>
  );
}

export default Task;
