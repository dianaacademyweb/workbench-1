import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import DashApi from "../../dashboard/auth";
import { IMAGE_API } from "../../config/constant";

// import routes from "../../routes";

const Sidebar = ({ open, onClose }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [docs, setDocs] = useState(false);
  const [dropdocsOpen, setDocsOpen] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(undefined);

  const username = localStorage.getItem("name");

  useEffect(() => {
    const Employedata = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employedataforemploye();
        console.log(response);
        setEmail(response.data.tasks[0]);

        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("there has been an error");
      }
    };
    Employedata();
  }, []);

  useEffect(() => {
    // Fetch the image URL or path from the API
    const fetchProfileImage = async () => {
      try {
        const response = await DashApi.Getimage();
        setProfileImage(response.data[0]);

        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
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
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-screen flex-col bg-lightPrimary pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-900 dark:text-darktext md:!z-50 lg:!z-50 xl:!z-0 ${
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
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-white dark:text-darktext">
          Diana<span className="font-medium">Sentinel</span>
        </div>
      </div>

      <div className="mt-[58px] mb-7 h-min-screen bg-gray-300 dark:bg-white/30 " />
      <div className=" mx-auto  flex   h-[120px] w-[120px] flex-col items-center justify-center rounded-full border-[4px] border-white bg-lightPrimary dark:!border-navy-700">
        {profileImage && (
          <div key={profileImage.id}>
            <img
              className="rounded-[100px] h-[100px] w-[100px] flex justify-center border border-navy-800"
              src={`${IMAGE_API}/${profileImage.image}`}
              alt="Profile Image"
            />
          </div>
        )}
      </div>
      <p className="text-black  font-bold text-xl text-[16px]  flex justify-center">
        Name: {username}
      </p>
      <p className="text-[12px] text-center">
        {email && (
          <div key={email.id}>
            <p>{email.email}</p>
          </div>
        )}
      </p>
      <div className="relative mb-3 hover:cursor-pointer overflow-y-auto max-h-screen">
        <li className="  text-[20px]  font-liolipins  text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="  text-[20px]  font-poppins  text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/task">Tasks</Link>
        </li>
        <li className="  text-[20px]  font-liolipins  text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/dianaconnect">Diana Connect</Link>
        </li>
        <li className="  text-[20px]  font-poppins  text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/performancepage">My Performance</Link>
        </li>
        <li
          className="text-[20px] font-liolipins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setSettingsExpanded(!settingsExpanded);
            setDropdownOpen(!dropdownOpen);
          }}
        >
          Settings <IoIosArrowDown className=" w-5 h-5" />
        </li>
        {settingsExpanded && (
          <div
            className={`absolute right-0 mt-2 px-10 py-2 w-[300px] max-h-screen overflow-y-auto bg-lightPrimary rounded-md dark:bg-navy-900 dark:text-darktext z-10 ${
              dropdownOpen ? "" : "hidden"
            }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/general"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              General
            </Link>
            <Link
              to="/designation"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Designation
            </Link>
            <Link
              to="/activity"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Activity
            </Link>
            <Link
              to="/activityset"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Activity Set
            </Link>
            <Link
              to="/shifts"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Shifts
            </Link>
            <Link
              to="/emaildigest"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Email Digest
            </Link>
            <Link
              to="/Timezone"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Timezone
            </Link>
            <Link
              to="/holidaydefinition"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Holiday Definition
            </Link>

            {/* Add more dropdown menu items as needed */}
          </div>
        )}
        <li
          className="text-[20px] font-liolipins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setDocs(!docs);
            setDocsOpen(!dropdocsOpen);
          }}
        >
          Documentation <IoIosArrowDown className=" w-5 h-5" />
        </li>
        {docs && (
          <div
          className={`absolute right-0 mt-2 px-10 py-2 w-[300px] max-h-screen overflow-y-auto bg-lightPrimary rounded-md dark:bg-navy-900 dark:text-darktext z-10 ${
            dropdocsOpen ? "" : "hidden"
          }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/installation"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Installation
            </Link>
            <Link
              to="/docsclientapp"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Client App
            </Link>
            <Link
              to="/docsdashboard"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Dashboard
            </Link>
            <Link
              to="/docsreports"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Reports
            </Link>
            <Link
              to="/docsemployees"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Employees
            </Link>
            <Link
              to="/docsteams"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Teams
            </Link>
            <Link
              to="/docstasks"
              className="block px-4 py-2 text-md text-white hover:bg-white dark:text-darktext  dark:hover:bg-navy-600 hover:text-lightPrimary"
            >
              Tasks
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

// const Sidebar = ({open , onClose}) => {
//   return (
//     <div
//     className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-900 dark:text-darktext md:!z-50 lg:!z-50 xl:!z-0 ${
//       open ? "translate-x-0" : "-translate-x-96"
//     }`}

//     >
//       <span
//         className="absolute top-4 right-4 block cursor-pointer xl:hidden"
//         onClick={onClose}
//       >
//         <HiX />
//       </span>

//       <div className={`mx-[56px] mt-[50px] flex items-center`}>
//         <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-white dark:text-darktext">
//           Diana<span className="font-medium">Sentinel</span>
//         </div>
//       </div>
//       <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
//       {/* Nav item */}

//       {/* <ul className="mb-auto pt-1">
//         <Links routes={routes} />
//       </ul> */}
//    <div className="relative mb-3  hover:cursor-pointer">
//       <li className="  text-[20px]  font-liolipins  text-white dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/dashboard">Dashboard</Link></li>
//       <li className="  text-[20px]  font-liolipins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/reports">Reports</Link></li>
//       <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to ="/teams" >Teams</Link></li>
//       <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/board" >Board</Link></li>
//       <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/employe" >Employees</Link></li>

//       <li className="  text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/task" >Tasks</Link></li>
//       <li className="  text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/settings" >settings</Link></li>
//    </div>

//       {/* Free Horizon Card */}
//       <div className="flex justify-center">
//         <SidebarCard />
//       </div>

//       {/* Nav item end */}
//     </div>
//   );
// };

// export default Sidebar;
