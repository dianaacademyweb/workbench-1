import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DashApi from "../../dashboard/auth";
import { IMAGE_API } from "../../config/constant";
// import routes from "../../routes";

const EmployeSidebar = ({ open, onClose }) => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const username = localStorage.getItem("name")

  useEffect(() => {
    // Fetch the image URL or path from the API
    const fetchProfileImage = async () => {
      try {
        const response = await DashApi.Getimage();
        setProfileImage(response.data[0]);
        console.log(response); // Assuming `message` contains the image URL
        if (response.data && response.data.success === true) {
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

    fetchProfileImage();
  }, []);

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-screen flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-900 dark:text-darktext md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 w-[200px] font-poppins text-[26px] font-bold uppercase text-lightPrimary dark:text-darktext">
        <div className="">           My<span className="font-medium ">Sentinel</span>
</div>
          <div className="absolute  mt-4 flex ml-2  h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-lightPrimary dark:!border-navy-700">
            {profileImage && (
              <div key={profileImage.id}>
                <img
                  className="rounded-[100px] h-[100px] w-[100px] flex justify-center"
                  src={`${IMAGE_API}/${profileImage.image}`}
                  alt="Profile Image"
                />
              </div>
            )}
          </div>
          <div className="mt-40">
            <p className="text-black  font-bold text-[16px]  flex justify-center">Name: {username}</p>
            <p className="text-black font-thin text-[15.5px] mt-2 justify-center flex ">
             rohilla@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[100px] mb-7 h-min-screen bg-gray-300 dark:bg-white/30 " />

      <div className="relative mt-40 hover:cursor-pointer overflow-y-auto max-h-[calc(100vh-250px)] ">
        <li className="  text-[20px]  font-liolipins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li className="  text-[20px]  font-poppins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/task">Tasks</Link>
        </li>

        <li
          className="text-[20px] font-liolipins text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setSettingsExpanded(!settingsExpanded);
            setDropdownOpen(!dropdownOpen);
          }}
        >
          Settings <IoIosArrowDown className=" w-5 h-5" />
        </li>
        {settingsExpanded && (
          <div
            className={` right-0 mt-2 py-2 w-48 bg-white rounded-md dark:bg-navy-900 dark:text-darktext shadow-lg z-10 ${
              dropdownOpen ? "" : "hidden"
            }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/general"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              General
            </Link>
            <Link
              to="/designation"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Designation
            </Link>
            <Link
              to="/activity"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Activity
            </Link>
            <Link
              to="/activityset"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Activity Set
            </Link>
            <Link
              to="/shifts"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Shifts
            </Link>
            <Link
              to="/emaildigest"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Email Digest
            </Link>
            <Link
              to="/Timezone"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Timezone
            </Link>
            <Link
              to="/holidaydefinition"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-darktext  dark:hover:bg-navy-600"
            >
              Holiday Definition
            </Link>

            {/* Add more dropdown menu items as needed */}
          </div>
        )}
      </div>

      {/* Rest of the Sidebar component */}
      {/* ... */}
    </div>
  );
};

export default EmployeSidebar;
