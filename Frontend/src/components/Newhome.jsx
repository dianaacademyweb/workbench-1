import React from "react";
import logo from "/src/assets/Images/loginimage/logo.png";
import homeimage from "../assets/Images/layouts/home.jpg";
import home2 from "../assets/Images/layouts/home2.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Newhome = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${homeimage})` }}
    >
      <div className="logo w-16 h-18 pt-6 pb-4 ml-10  ">
        <a href="http://www.dianaadvancedtechacademy.uk/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div
        className="box mx-auto pt-2 ml-12 mr-12 shadow-2xl bg-cover bg-no-repeat   py-3"
        style={{ backgroundImage: `url(${home2})` }}
      >
        {/* here the navigation bar started  */}
        <nav className="flex m-4 pt-2 text-white   text-3xl items-center justify-between font-bernard">
          <div className="company-name ml-6 sm:mb-0">
            <a href="" className="hover:text-gray-900">
              DIANA'S
            </a>
          </div>
          <ul className="flex">
            <li className="mr-8">
              <a href="" className=" hover:text-gray-900  md:text-3xl sm:text-sm text-sm  ">
                HOME
              </a>
            </li>
            <li className="mr-8">
              <a href="/team" className=" hover:text-gray-900 md:text-3xl sm:text-sm text-sm ">
                OUR TEAM
              </a>
            </li>
            <li className="mr-8">
              <a href="/login" className=" hover:text-gray-900 md:text-3xl sm:text-sm text-sm ">
                LOGIN
              </a>
            </li>
            <li className="mr-8">
              <a href="" className=" hover:text-gray-900 md:text-3xl sm:text-sm text-sm ">
                CONTACT US
              </a>
            </li>
            <li className="mr-8">
              <a href="" className=" hover:text-gray-900">
                &#8801;
              </a>
            </li>
          </ul>
        </nav>

        {/* navigation bar ended */}
        <div className="flex  items-center justify-center">
          <h2 className="md:text-3xl sm:text-xl  mb-4 text-white font-arial-rounded">
            WELCOME TO DIANA EMPLOYMENT PORTAL
          </h2>
        </div>
        <div className=" mt-5 flex  text-white items-center justify-center tracking-custom-wide text-lg font-poppins">
          A TEAM WORK'S TOGETHER, STAY'S TOGETHER AND ACHIVE GREATNESS TOGETHER.
          </div>
      {/* main div that follow gird linies */}


      <div className=" mt-5 grid  md:grid-cols-3 xl:grid-cols-3  sm:grid-cols-1  grid-flow-row gap-10">


      {/* first div  */}

      <div className="box  w-1/3 bg-gray-200 h-80 mr-20 ml-20 shadow-2xl border border-gray-200">
            <div className="inner-box text-center font-calibri  bg-cyan-700 p-2   h-full overflow-hidden">
              Our employee management software helps you efficiently manage your
              workforce, automate tasks, and boost productivity. With our
              intuitive interface, you can easily create and manage teams, add
              employees, and organize them according to departments, projects,
              or roles
            </div>
          </div>




          {/* 2nd div  */}


          <div className="box  w-1/3 bg-gray-200 h-80 mr-20 ml-20 shadow-2xl border border-gray-200">
            <div className="inner-box text-center font-calibri  bg-cyan-700 p-2   h-full overflow-hidden">
              Simplify the employee onboarding process by centralizing all
              employee data in one place. Track employee progress, manage
              training programs, and monitor performance evaluations. Our
              software also allows you to assign projects, tasks, and deadlines
              to individual employees or teams, ensuring efficient project
              management
            </div>
          </div>




          {/* 3rd div */}


          <div className="box  w-1/3 bg-gray-200 h-80 mr-20 ml-20 shadow-2xl border border-gray-200">
            <div className="inner-box text-center font-calibri  bg-cyan-700 p-2   h-full overflow-hidden">
              Faster collaboration within your organization with built-in
              communication and collaboration tools. Employees can exchange
              messages, share files, and collaborate on projects directly within
              the software. Stay updated with real-time notifications, task
              progress, and project status. Additionally, our software provides
              comprehensive reporting{" "}
            </div>
          </div>









      </div>






        <div className="flex flex-col sm:flex-row mt-4 m-4 justify-between text-white text-lg">
         
         
          
        </div>

        {/* icons div  */}
        <div className="flex mt-4  items-center justify-center pt-7 pb-3 ">
          <div className="mr-2">
            <a href="">
              <FaFacebook color="white" />
            </a>
          </div>
          <div className="mr-2">
            <a href="">
              <FaInstagram color="white" />
            </a>
          </div>
          <div className="mr-2">
            {" "}
            <a href="">
              <FaTwitter color="white" />
            </a>
          </div>
        </div>
        {/* icons div ended  */}
      </div>
      <footer className="flex items-center justify-center text-white text-sm pt-4 pb-4">
        @ 2023 DIANA ADVANCED TECH ACADEMY | Get the World's best IT Courses |
        Privacy Policy
      </footer>
    </div>
  );
};

export default Newhome;
