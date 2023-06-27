
import '/src/App.jsx';
import React from 'react'

// const TopNav = (e) => {
  // if (e){
  //   e.preventDefault();
  // }
  function TopNav(){
  return (
    <div>
        <div className="items-center flex justify-center ">
        {/* Top Navbar */}
        <nav className="pt-2">
          <ul className="flex flex-wrap w-1/3 justify-between md:w-full lg:gap-8 md:text-2xl font-poppins m-3 gap-4">
            <button><li className=" topnav">
              <a href="https://dianaadvancedtechacademy.uk/">Diana's</a>
            </li>
            </button>
            <button><li className="topnav ">
              <a href="/">Home</a>
            </li>
            </button>
            <button><li className="topnav ">
              <a href="/employee-onboarding">Employee Onboarding</a>
            </li>
            </button>
            <button><li className="topnav ">
              <a href="/contact">Contact Us</a>
            </li>
            </button>
          </ul>
        </nav>
        </div>
    </div>
  )
}

export default TopNav;