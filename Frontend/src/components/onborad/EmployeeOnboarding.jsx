import React from "react";
import homeimage from "/src/assets/Images/layouts/home.jpg";
import '/src/App.jsx';
import TopNav from "../teams/TopNav";
import Policy from "./Policy";


function EmployeeOnboarding(){
    return(
            <div className=" mx-auto flex flex-col items-center min-h-screen  gap-2 bg-cover "style={{ backgroundImage: `url(${homeimage})` }}>
                <TopNav/>
                <h1 className="emp text-center ">EMPLOYEE <span className="text-orange-400">ONBOARDING</span></h1>
            <div className="subs flex flex-col text-center w-full md:w-1/2 lg:w-2/3">
                    <h1 className="sub">THE JOURNEY OF EMPLOYEE</h1>
                <video className="pt-12" muted autoPlay playsInline preload="auto" src="https://558462.fs1.hubspotusercontent-na1.net/hubfs/558462/employee-lifecycle-trimmed-v2.mp4" typeof="video/mp4"></video>
                </div>
                <div>
                    <Policy/>
                </div>
            </div>
    )
}

export default EmployeeOnboarding;