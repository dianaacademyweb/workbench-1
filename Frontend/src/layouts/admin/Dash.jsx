import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import { useAuth } from "../../context/AuthContext";
import ScreenshotsRow from '../../components/DashBoard/Screen';
import Employe from "../../components/DashBoard/Employelist";
import TaskCard from "../../views/components/TaskCard";

function Dash() {
  let {id }= useAuth()
  const[open, setOpen]= React.useState(true);
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
          <div className="h-full">
          <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Work warden"}
              brandText={"work Warden"}
              // {...rest}
            />
         

         <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">        
         <h1 className=' mt-4 text-black text-navy-700 flex justify-center  dark:text-white dark:hover:text-white text-2xl'> Recent activity</h1>
     <ScreenshotsRow/>
     <Employe/>
     <TaskCard/>
     <div className=" flex ">
     
     </div>
        </div>
        </div>
        </main>
        
      </div>
    </div>
  );
}

export default Dash;
