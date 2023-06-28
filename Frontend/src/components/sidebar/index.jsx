import React , {useState} from "react";
import { HiX } from "react-icons/hi";
import Sidedata from "./components/Sidedata";
import SidebarCard from "./components/sidebarcard";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import routes from "../../routes";

const Sidebar = ({ open, onClose }) => {
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-900 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
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
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <div className="relative mb-3 hover:cursor-pointer">
        <li
          className="text-[20px] font-liolipins text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"
          onClick={() => {
            setReportsExpanded(!reportsExpanded);
            setDropdownMenuOpen(!dropdownMenuOpen);
          }}
        >
          Reports

          
        </li>
        {reportsExpanded && (
          <div
            className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 ${
              dropdownMenuOpen ? "" : "hidden"
            }`}
          >
            {/* Dropdown menu items */}
            <Link
              to="/reports/sales"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sales Report
            </Link>
            <Link
              to="/reports/finance"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Finance Report
            </Link>
            {/* Add more dropdown menu items as needed */}
          </div>
        )}
        <li className="  text-[20px]  font-liolipins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to= "/dashboard">Dashboard</Link></li>
      <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to ="/teams" >Teams</Link></li>
       <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/board" >Board</Link></li>
      <li className="   text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/employe" >Employees</Link></li>

      <li className="  text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/task" >Tasks</Link></li>
      <li className="  text-[20px]  font-poppins  text-navy-700 dark:text-white my-[3px] flex cursor-pointer items-center px-10 py-3"><Link to = "/settings" >settings</Link></li>
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