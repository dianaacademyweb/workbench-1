import React from "react";
import Marquee from "react-fast-marquee";
import logo from "/src/assets/Images/loginimage/logo.png";
import homeimage from "../assets/Images/layouts/home.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "/src/App.jsx";
import ImageScr from "./ImageScr";

const NewHome = () => {
  return (
    // here goes the main body
    <div
      className=" bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${homeimage})` }}
    >
      <div className="logo w-10 h12 pt-2 pb-2 ml-2 md:w-16 md:h-18 md:pt-6 md:pb-4 md:ml-10  ">
        <a href="https://www.dianaadvancedtechacademy.uk/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      {/* here goes the inside container */}
      <div
        className="box mx-auto ml-6 mr-6 md:pt-2 md:ml-24 md:mr-24 shadow-2xl bg-cover bg-no-repeat md:py-3"
        style={{ backgroundImage: `url(${homeimage})` }}
      >
        <nav className="md:flex md:m-4 md:pt-2 text-white md:items-center md:justify-between ">
          <div>
            {" "}
            <span className="md:ml-6 ">
              <a
                href="https://www.dianaadvancedtechacademy.uk/"
                className="hover:text-gray-900 md:text-3xl duration-500 font-bernard"
              >
                DIANA'S
              </a>
            </span>
          </div>
          <ul className="md:flex items-center md:text-3xl text-white    transition-all ease-in duration-500 font-bernard">
            <li className="mx-2 my-6 md:my-0">
              <a href="" className=" hover:text-gray-900 duration-500">
                HOME
              </a>
            </li>
            <li className="mx-2 my-6 md:my-0">
              <a href="/ourteam" className=" hover:text-gray-900 duration-500">
                OUR TEAM
              </a>
            </li>
            <li className="mx-2 my-6 md:my-0">
              <a href="/login" className=" hover:text-gray-900 duration-500">
                LOGIN
              </a>
            </li>
            <li className="mx-2 my-6 md:my-0">
              <a
                href="/contactus"
                className=" hover:text-gray-900 duration-500"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex  items-center justify-center">
          <Marquee>
            <h2 className="md:text-3xl  mb-4 text-white font-arial-rounded">
              WELCOME TO DIANA EMPLOYMENT PORTAL
            </h2>
          </Marquee>
        </div>
        <div className="flex  text-white justify-center text-center tracking-custom-wide  font-poppins ">
          A TEAM WORK'S TOGETHER, STAY'S TOGETHER AND ACHIVE GREATNESS TOGETHER.
        </div>
        <div className="flex flex-col gap-4 md:flex-row mt-4 m-4 justify-between text-white text-lg">
          <div className="box md:w-1/3   bg-gray-200 md:h-80 md:ml-8 shadow-2xl border border-gray-400">
            <p className="inner-box justify-center items-center font-calibri   p-2  text-justify h-full ">
              {" "}
              Our employee management software helps you efficiently manage your
              workforce, automate tasks, and boost productivity. With our
              intuitive interface, you can easily create and manage teams, add
              employees, and organize them according to departments, projects,
              or roles
            </p>
          </div>
          <div className="box md:w-1/3   bg-gray-200 md:h-80 md:ml-10 shadow-2xl border border-gray-400">
            <p className="inner-box  justify-center items-center font-calibri   p-2 text-justify  h-full ">
              Simplify the employee onboarding process by centralizing all
              employee data in one place. Track employee progress, and monitor
              performance evaluations. Our software also allows you to assign
              projects, tasks, and deadlines to individual employees or teams,
              ensuring efficient project management
            </p>
          </div>
          <div className="box md:w-1/3   bg-gray-200 md:h-80 md:ml-10 md:mr-8 shadow-2xl border border-gray-400">
            <p className="inner-box justify-center items-center  font-calibri  p-2   text-justify h-full ">
              Faster collaboration within your organization with built-in
              communication and collaboration tools. Employees can exchange
              messages, share files, and collaborate on projects directly within
              the software. Stay updated with real-time notifications, and
              project status, project timelines, and resource allocation
            </p>
          </div>
        </div>
        <div className="flex mt-4  items-center justify-center pt-5 pb-3 ">
          <div className="mr-2">
            <a href="https://www.facebook.com/dianaadvancedtechacademy/">
              <FaFacebook color="white" />
            </a>
          </div>
          <div className="mr-2">
            <a href="https://www.instagram.com/dianaadvancedtechacademy/">
              <FaInstagram color="white" />
            </a>
          </div>
          <div className="mr-2">
            {" "}
            <a href="https://twitter.com/academydiana">
              <FaTwitter color="white" />
            </a>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-4 py-10 ">
        <ImageScr />
      </div>

      <footer className="flex items-center justify-center text-white footer pt-4 pb-4">
        @ 2023 DIANA ADVANCED TECH ACADEMY | Get the World's best IT Courses |
        Privacy Policy
      </footer>
    </div>
  );
};

export default NewHome;
