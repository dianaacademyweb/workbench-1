import React , {useState} from "react";
import { HiX } from "react-icons/hi";
import { IoIosArrowDown} from 'react-icons/io';
import Sidedata from "./components/Sidedata";
import SidebarCard from "./components/sidebarcard";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// import routes from "../../routes";

const Sidebar = ({ open, onClose }) => {
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-screen flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-900 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
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
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Diana<span className="font-medium">Sentinel</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-min-screen bg-gray-300 dark:bg-white/30 " />

      <div className="relative mb-3 hover:cursor-pointer overflow-y-auto max-h-[calc(100vh-250px)] ">
      <li className="  text-[20px]  font-liolipins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/dashboard">Dashboard</Link></li>
        <li
          className="text-[20px] font-liolipins text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setReportsExpanded(!reportsExpanded);
            setDropdownMenuOpen(!dropdownMenuOpen);
          }}
        >
          Reports <IoIosArrowDown className=" w-5 h-5" />

          
        </li>
        {reportsExpanded && (
          <div
            className={` right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 ${
              dropdownMenuOpen ? "" : "hidden"
            }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/topactivity"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              TOP ACTIVITY
            </Link>
            <Link
              to="/employeereports"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              EMPLOYEE REPORTS
            </Link>
            <Link
              to="/activitypattern"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
             ACTIVITY PATTERN
            </Link>
            <Link
              to="/advancedreport"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ADVANCED REPORT
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ATTENDANCE REPORT
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              TIME LOG SUMMARY
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              DORMANT EMPLOYEES
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              HIGH IDLE HOURS
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              CLIENT APP ACTIVITY
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              OT REPORT
            </Link>
            {/* Add more dropdown menu items as needed */}
          </div>
        )}
        
      <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to ="/teams" >Teams</Link></li>
       <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/board" >Board</Link></li>
      <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/employe" >Employees</Link></li>
      
      <li className="  text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/task" >Tasks</Link></li>
      
      <li
          className="text-[20px] font-liolipins text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setSettingsExpanded(!settingsExpanded);
            setDropdownOpen(!dropdownOpen);
          }}
        >
          Settings <IoIosArrowDown className=" w-5 h-5" />

          
        </li>
        {settingsExpanded && (
          <div
            className={` right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 ${
              dropdownOpen ? "" : "hidden"
            }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/reports/sales"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              General
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Designation
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
             Activity
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Activity Set 
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Shifts
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Email Digest
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Timezone
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Holiday Defination
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
//     className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-900 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
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
//         <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
//           Diana<span className="font-medium">Sentinel</span>
//         </div>
//       </div>
//       <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
//       {/* Nav item */}

//       {/* <ul className="mb-auto pt-1">
//         <Links routes={routes} />
//       </ul> */}
//    <div className="relative mb-3  hover:cursor-pointer">
//       <li className="  text-[20px]  font-liolipins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/dashboard">Dashboard</Link></li>
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