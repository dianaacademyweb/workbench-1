import React , {useState} from "react";
import { HiX } from "react-icons/hi";
import { IoIosArrowDown} from 'react-icons/io';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// import routes from "../../routes";

const Sidebar = ({ open, onClose }) => {
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const {usertype} = useAuth()

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
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-lightPrimary dark:text-darktext">
          Diana<span className="font-medium">Sentinel</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-min-screen bg-gray-300 dark:bg-white/30 " />

      <div className="relative mb-3 hover:cursor-pointer overflow-y-auto max-h-[calc(100vh-250px)] ">
      <li className="  text-[20px]  font-liolipins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/dashboard">Dashboard</Link></li>
        <li
          className="text-[20px] font-liolipins text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setReportsExpanded(!reportsExpanded);
            setDropdownMenuOpen(!dropdownMenuOpen);
          }}
        >
          Reports <IoIosArrowDown className=" w-5 h-5" />




          
        </li>
        {reportsExpanded && (
          <div
            className={` right-0 mt-2 py-2 w-48 bg-white dark:bg-navy-900 dark:text-white rounded-md shadow-lg z-10 ${
              dropdownMenuOpen ? "" : "hidden"
            }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/topactivity"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              TOP ACTIVITY
            </Link>
            <Link
              to="/employeereports"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              EMPLOYEE REPORTS
            </Link>
            <Link
              to="/activitypattern"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
             ACTIVITY PATTERN
            </Link>
            <Link
              to="/advancedreport"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              ADVANCED REPORT
            </Link>
            <Link
              to="/attendancereport"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              ATTENDANCE REPORT
            </Link>
            <Link
              to="/timelog"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              TIME LOG SUMMARY
            </Link>
            <Link
              to="/dormantemployee"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              DORMANT EMPLOYEES
            </Link>
            <Link
              to="/highidlehours"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              HIGH IDLE HOURS
            </Link>
            <Link
              to="/clientappactivity"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              CLIENT APP ACTIVITY
            </Link>
            <Link
              to="/otreport"
              className="block px-4 py-2 text-sm text-lightPrimary dark:text-darktext hover:bg-white dark:hover:bg-navy-600"
            >
              OT REPORT
            </Link>
            {/* Add more dropdown menu items as needed */}
          </div>
        )}
        
      <li className="   text-[20px]  font-poppins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to ="/teams" >Teams</Link></li>
       <li className="   text-[20px]  font-poppins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/board" >Board</Link></li>
      <li className="   text-[20px]  font-poppins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/employee" >Employees</Link></li>
      
      <li className="  text-[20px]  font-poppins  text-lightPrimary dark:text-darktext my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/task" >Tasks</Link></li>
      
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
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
              General
            </Link>
            <Link
              to="/designation"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
              Designation
            </Link>
            <Link
              to="/activity"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
             Activity
            </Link>
            <Link
              to="/activityset"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
              Activity Set 
            </Link>
            <Link
              to="/shifts"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
              Shifts
            </Link>
            <Link
              to="/emaildigest"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
              Email Digest
            </Link>
            <Link
              to="/Timezone"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
            >
              Timezone
            </Link>
            <Link
              to="/holidaydefinition"
              className="block px-4 py-2 text-sm text-lightPrimary hover:bg-white dark:text-darktext  dark:hover:bg-navy-600"
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
//         <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-lightPrimary dark:text-darktext">
//           Diana<span className="font-medium">Sentinel</span>
//         </div>
//       </div>
//       <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
//       {/* Nav item */}

//       {/* <ul className="mb-auto pt-1">
//         <Links routes={routes} />
//       </ul> */}
//    <div className="relative mb-3  hover:cursor-pointer">
//       <li className="  text-[20px]  font-liolipins  text-lightPrimary dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/dashboard">Dashboard</Link></li>
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