import React from "react";
import Marquee from 'react-fast-marquee';
import logo from '/src/assets/Images/loginimage/logo.png';
import homeimage from "../assets/Images/layouts/home.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import '/src/App.jsx';
import ImageScr from "./ImageScr";
const NewHome = () => { 
  return (
    <div className=" bg-cover bg-no-repeat " style={{ backgroundImage: `url(${homeimage})` }}>
          <div className="logo w-16 h-18 pt-6 pb-4 ml-10  ">
            <a href="http://www.dianaadvancedtechacademy.uk/"><img src={logo} alt="Logo"/></a>
          </div>
      <div className="box mx-auto pt-2 ml-24 mr-24 shadow-2xl bg-cover bg-no-repeat py-3" style={{ backgroundImage: `url(${homeimage})` }}  >
          <nav className="flex m-4 pt-2 text-white   text-3xl items-center justify-between font-bernard">
            <div className="company-name ml-6 sm:mb-0"><a href="http://www.dianaadvancedtechacademy.uk/" className="hover:text-gray-900">DIANA'S</a></div>
            <ul className="flex">
              <li className="mr-8"><a href="" className=" hover:text-gray-900">HOME</a></li>
              <li className="mr-8"><a href="/team"  className=" hover:text-gray-900">OUR TEAM</a></li>
              <li className="mr-8"><a href="/login"  className=" hover:text-gray-900">LOGIN</a></li>
              <li className="mr-8"><a href=""  className=" hover:text-gray-900">CONTACT US</a></li>
              <li className="mr-8"><a href=""  className=" hover:text-gray-900">&#8801;</a></li>
            </ul>
          </nav>
          <div className="flex  items-center justify-center">
          <Marquee><h2 className="text-3xl  mb-4 text-white font-arial-rounded">WELCOME TO DIANA EMPLOYMENT PORTAL</h2></Marquee>
          </div>
          <div className="flex  text-white items-center justify-center tracking-custom-wide  font-poppins  mar" >A TEAM WORK'S TOGETHER, STAY'S TOGETHER AND ACHIVE GREATNESS TOGETHER.</div>
          <div className="flex flex-col sm:flex-row mt-4 m-4 justify-between text-white text-lg">
            <div className="box w-1/3   bg-gray-200 h-80 ml-8 shadow-2xl border border-gray-400"><p className="inner-box justify-center items-center font-calibri   p-2  text-justify h-full "> Our employee management software helps you efficiently manage your workforce, automate tasks, and boost productivity. With our intuitive interface, you can easily create and manage teams, add employees, and organize them according to departments, projects, or roles</p></div>
            <div className="box w-1/3   bg-gray-200 h-80 ml-10 shadow-2xl border border-gray-400"><p className="inner-box  justify-center items-center font-calibri   p-2 text-justify  h-full ">Simplify the employee onboarding process by centralizing all employee data in one place. Track employee progress, and monitor performance evaluations. Our software also allows you to assign projects, tasks, and deadlines to individual employees or teams, ensuring efficient project management</p></div>
            <div className="box w-1/3   bg-gray-200 h-80 ml-10 mr-8 shadow-2xl border border-gray-400"><p className="inner-box justify-center items-center  font-calibri  p-2   text-justify h-full ">Faster collaboration within your organization with built-in communication and collaboration tools. Employees can exchange messages, share files, and collaborate on projects directly within the software. Stay updated with real-time notifications, and project status, project timelines, and resource allocation</p></div>
          </div>
          <div className="flex mt-4  items-center justify-center pt-5 pb-3 ">
            <div className="mr-2"><a href="https://www.facebook.com/dianaadvancedtechacademy/"><FaFacebook color="white"/></a></div>
            <div className="mr-2"><a href="https://www.instagram.com/dianaadvancedtechacademy/"><FaInstagram color="white"/></a></div>
            <div className="mr-2"> <a href="https://twitter.com/academydiana"><FaTwitter color="white"/></a></div>
          </div>
      </div>
      <div className=" mx-auto px-4 py-10 ">
        <ImageScr />
      </div>

      <footer className="flex items-center justify-center text-white footer pt-4 pb-4">@ 2023 DIANA ADVANCED TECH ACADEMY | Get the World's best IT Courses | Privacy Policy</footer>
      
    </div>
  );
};

export default NewHome;