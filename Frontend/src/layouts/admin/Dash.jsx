import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import { useAuth } from "../../context/AuthContext";
import ScreenshotsRow from "../../components/DashBoard/Screen";
import Employe from "../../components/DashBoard/Employelist";
import TaskCard from "../../views/components/TaskCard";

function Dash() {
  let { id } = useAuth();
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  return (
    <div className="flex h-ful bg-[#C2CAD0] w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full   dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          <div className="h-full mt-1">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Work warden"}
              brandText={"work Warden"}
              // {...rest}
            />

            <div className="pt-5 h-full min-h-screen m-8 md:pr-2">
              <div className="mx-auto rounded-xl  flex flex-col items-center bg-white">
                <h1 className="text-2xl mt-4  font-bold">
                  Welcome to DianaSentinel
                </h1>
                <p className="m-6 text-justify">
                  Welcome to the DianaSentinel Employment Portal, where your
                  career journey begins with endless opportunities and
                  possibilities. Our user friendly platform is designed to
                  connect talented individuals like you with top-notch employers
                  across various industries. As you embark on this exciting
                  quest, you'll find a wide range of job listings tailored to
                  your skills and aspirations. Whether you are a seasoned
                  professional seeking new challenges or a fresh graduate eager
                  to kickstart your career, DianaSentinel is here to support you
                  every step of the way.
                </p>
              </div>
              <div className="flex gap-4 mt-10 ">
                <div className="w-1/3 bg-white  rounded">
                    <h1 className="bg-[#E77170] text-white text-xl p-2">UPCOMING EVENTS</h1>
                    <div className="m-4">
                     <ul>
                      <li>event 1</li>
                      <li>event 2</li>
                      <li>event 3</li>
                      <li>event 4</li>
                      <li>event 5</li>
                      <li>event 6</li>
                     </ul>
                    </div>
                </div>
                <div className="w-1/3 bg-white text-xl rounded">
                    <h1 className="bg-[#E77170] text-white p-2">RECENT ACTIVITY</h1>
                    <div className="m-4">
                      <ul>
                        <li>vs code</li>
                        <li>bing</li>
                        <li>mail</li>
                      </ul>
                    </div>
                </div>
                <div className="w-1/3 bg-white text-xl rounded">
                    <h1 className="bg-[#E77170] text-white p-2">UPCOMING BIRTHDAYS</h1>
                    <div className="m-4">
                      <ul>
                        <li>employee 1</li>
                        <li>employee2</li>
                        
                      </ul>
                    </div>
                </div>
              </div>
              {/* <ScreenshotsRow/> */}
              {/* <Employe/> */}
              <TaskCard/>
              {/* <div className=" flex ">
     
     </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dash;
