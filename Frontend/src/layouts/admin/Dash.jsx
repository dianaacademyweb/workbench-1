import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import { useAuth } from "../../context/AuthContext";

function Dash() {
  let {user}= useAuth()
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
              logoText={"data"}
            />
          </div>

        </main>
        <div className=" mt-[50px] mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
        <h1 className='text-4xl text-navy-700 flex justify-center  dark:text-white dark:hover:text-white'>Work warden </h1>
     <h1 className=' mt-5 text-black text-navy-700 flex justify-center  dark:text-white dark:hover:text-white'> this is the dashboard of {user && <p> {user.username}</p> }</h1>
     <div className='mt-[500px]'> hello </div>
     <div className='mt-[600px]'>2nd part</div>
          {/* Routes */}
        </div>
      </div>
    </div>
  );
}

export default Dash;
