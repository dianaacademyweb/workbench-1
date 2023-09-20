import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { IoIosArrowDown,IoMdSettings } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { VscTasklist } from "react-icons/vsc";
import {HiDocument } from "react-icons/hi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import "./drop.css"
import { BsClipboardData,BsPersonVcard } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./custom.css"
const Sidebar = ({ open, onClose }) => {
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [docsExpanded, setDocsExpanded] = useState(false);
  const [dropdowndocsOpen, setDropdowndocsOpen] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const { usertype } = useAuth();

  const dropdownTransitionClasses = "transition duration-300 ease-in-out";
  const initialDropdownStyles = "opacity-0 scale-95 transform origin-top";
  const expandedDropdownStyles = "opacity-100 scale-100";

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
        <div className=" mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-white dark:text-darktext">
          Diana<span className="font-medium">Sentinel</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-min-screen bg-gray-300 dark:bg-white/30 " />

      <div className="relative mb-3 hover:cursor-pointer overflow-y-auto max-h-[calc(100vh-250px)] custom-scrollbar">
        <li className="hover:bg-white  hover:text-lightPrimary  text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]  font-liolipins  text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3">
          <Link to="/dashboard"><div className="flex items-center gap-1"><LuLayoutDashboard/>Dashboard</div></Link>
        </li>
        <li
          className="text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-liolipins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setReportsExpanded(!reportsExpanded);
            setDropdownMenuOpen(!dropdownMenuOpen);
          }}
        >
         <TbReportSearch/> Reports <IoIosArrowDown className=" w-5 h-5" />
        </li>
        {reportsExpanded && (
          <div
          className={`right-0 mt-2 px-10 py-2 w-[300px] bg-lightPrimary dark:bg-navy-900 dark:text-white rounded-md z-10 ${
            dropdownMenuOpen ? dropdownTransitionClasses : "hidden"
          } ${
            dropdownMenuOpen ? expandedDropdownStyles : initialDropdownStyles
          } ${
            dropdownMenuOpen ? "dropdown-entered" : "dropdown-exited"
          }`}
        >
            {/* Dropdown menu items */}
            <Link
              to="/topactivity"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Top Activity
            </Link>
            <Link
              to="/employeereports"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Employee Reports
            </Link>
            <Link
              to="/activitypattern"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Activity Pattern
            </Link>
            <Link
              to="/advancedreport"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Advanced Report
            </Link>
            <Link
              to="/attendancereport"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Attendance Report
            </Link>
            <Link
              to="/timelog"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Time Log Summary
            </Link>
            <Link
              to="/dormantemployee"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Dormant Employees
            </Link>
            <Link
              to="/highidlehours"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              High Idle Hours
            </Link>
            <Link
              to="/clientappactivity"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Client App Activity
            </Link>
            <Link
              to="/otreport"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Ot Report
            </Link>
            {/* Add more dropdown menu items as needed */}
          </div>
        )}

        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-poppins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3`}
        >
          <Link to="/teams"><div className="flex items-center"><AiOutlineTeam/>Teams</div></Link>
        </li>
        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-poppins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3`}
        >
          <Link to="/board"><div className="flex items-center"><BsClipboardData/>Board</div></Link>
        </li>
        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-poppins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3`}
        >
          <Link to="/employee"><div className="flex items-center"><BsPersonVcard/>Employees</div></Link>
        </li>

        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-poppins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3`}
        >
          <Link to="/task"><div className="flex items-center"><VscTasklist/>Tasks</div></Link>
        </li>
        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-liolipins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3`}
        >
          <Link to="/dianaconnect"><div className="flex items-center"><MdOutlineConnectWithoutContact/>Diana Connect</div></Link>
        </li>
        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-liolipins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3

          }`}
          onClick={() => {
            setSettingsExpanded(!settingsExpanded);
            setDropdownOpen(!dropdownOpen);
          }}
        >
         <IoMdSettings/> Settings <IoIosArrowDown className=" w-5 h-5" />
        </li>
        {settingsExpanded && (
          <div
            className={`right-0 mt-2 px-10 py-2 w-[300px] bg-lightPrimary dark:bg-navy-900 dark:text-white rounded-md z-10 ${
              dropdownOpen ? dropdownTransitionClasses : "hidden"
            } ${dropdownOpen ? expandedDropdownStyles : initialDropdownStyles}`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/general"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              General
            </Link>
            <Link
              to="/designation"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Designation
            </Link>
            <Link
              to="/activity"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Activity
            </Link>
            <Link
              to="/activityset"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Activity Set
            </Link>
            <Link
              to="/shifts"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Shifts
            </Link>
            <Link
              to="/emaildigest"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Email Digest
            </Link>
            <Link
              to="/Timezone"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Timezone
            </Link>
            <Link
              to="/holidaydefinition"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Holiday Definition
            </Link>

            {/* Add more dropdown menu items as needed */}
          </div>
        )}
        <li
          className={`text-[20px] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] hover:bg-white hover:text-lightPrimary font-liolipins text-white dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3 
           
          }`}
          onClick={() => {
            setDocsExpanded(!docsExpanded);
            setDropdowndocsOpen(!dropdowndocsOpen);
          }}
        >
         <HiDocument/> Documentation <IoIosArrowDown className=" w-5 h-5" />
        </li>
        {docsExpanded && (
          <div
            className={`right-0 mt-2 px-10 py-2 w-[300px] bg-lightPrimary dark:bg-navy-900 dark:text-white rounded-md z-10 ${
              docsExpanded ? dropdownTransitionClasses : "hidden"
            } ${docsExpanded ? expandedDropdownStyles : initialDropdownStyles}`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/installation"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Installation
            </Link>
            <Link
              to="/docsclientapp"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Client App
            </Link>
            <Link
              to="/docsdashboard"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Dashboard
            </Link>
            <Link
              to="/docsreports"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Reports
            </Link>
            <Link
              to="/docsemployees"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Employees
            </Link>
            <Link
              to="/docsteams"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
            >
              Teams
            </Link>
            <Link
              to="/docstasks"
              className="block px-4 py-2 text-md text-white dark:text-darktext hover:bg-white hover:text-lightPrimary dark:hover:bg-navy-600 transition duration-300 ease-in-out"
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
