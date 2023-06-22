import React from "react";
import '/src/App.jsx';
function TopNav(){
  
    return(
        <div>
        {/* Top Navbar */}
        <nav className=" text-white pt-2 nav ">
          <ul className="flex justify-between top p-4 font-poppins m-3 ">
            <button><li className=" topnav">
              <a href="http://www.dianaadvancedtechacademy.uk/">Diana's</a>
            </li>
            </button>
            <button><li className="topnav ">
              <a href="/">Home</a>
            </li>
            </button>
            <button><li className="topnav ">
              <a href="#employee-onboarding">Employee Onboarding</a>
            </li>
            </button>
            <button><li className="topnav ">
              <a href="#contact-us">Contact Us</a>
            </li>
            </button>
          </ul>
        </nav>
        </div>
    )
}

export default TopNav;