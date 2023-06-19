import React from "react";
import logo from '/src/assets/Images/loginimage/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const NewHome = () => {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-[url('src/assets/Images/layouts/home.jpg')]">
      <div className="logo w-16 h-18 pt-4 pb-4 ">
          <img src={logo} alt="Logo"/>
      </div>
      <div className="container pt-2 shadow-2xl bg-cover bg-no-repeat mx-auto bg-[url('src/assets/Images/layouts/home2.jpg')] py-3">
      <nav className="flex m-4 pt-2 text-white  text-3xl items-center justify-between font-bernard">
        <div className="company-name ml-7 sm:mb-0"><a href="">DIANA'S</a></div>
        <ul className="flex">
          <li className="mr-8"><a href="" className=" hover:text-gray-900">HOME</a></li>
          <li className="mr-8"><a href=""  className=" hover:text-gray-900">OUR TEAM</a></li>
          <li className="mr-8"><a href=""  className=" hover:text-gray-900">CONTACT US</a></li>
          <li className="mr-8"><a href=""  className=" hover:text-gray-900">&#8801;</a></li>
        </ul>
      </nav>
      <div className="flex  items-center justify-center">
      <h2 className="text-3xl  mb-4 text-white font-arial-rounded">WELCOME TO DIANA EMPLOYMENT PORTAL</h2>
      </div>
      <div className="flex  text-white items-center justify-center tracking-custom-wide text-lg font-calibri">A TEAM WORK'S TOGETHER, STAY'S TOGETHER AND ACHIVE GREATNESS TOGETHER.</div>
      <div className="flex flex-col sm:flex-row mt-4 m-4 justify-between text-white">
        <div className="box w-full sm:w-1/3 bg-gray-400 h-80 mr-20 ml-20 shadow-md rounded-md border border-gray-400"><div className="inner-box rounded-md bg-cyan-600 p-2 h-full overflow-hidden">Our employee management software helps you efficiently manage your workforce, automate tasks, and boost productivity. With our intuitive interface, you can easily create and manage teams, add employees, and organize them according to departments, projects, or roles.</div></div>
        <div className="box w-full sm:w-1/3 bg-gray-400 h-80 mr-20 ml-20 shadow-md rounded-md border border-gray-400"><div className="inner-box rounded-md bg-cyan-600 p-2 h-full overflow-hidden">Simplify the employee onboarding process by centralizing all employee data in one place. Track employee progress, manage training programs, and monitor performance evaluations. Our software also allows you to assign projects, tasks, and deadlines to individual employees or teams, ensuring efficient project management.</div></div>
        <div className="box w-full sm:w-1/3 bg-gray-400 h-80 mr-20 ml-20 shadow-md rounded-md border border-gray-400"><div className="inner-box rounded-md bg-cyan-600 p-2 h-full overflow-hidden">Foster collaboration within your organization with built-in communication and collaboration tools. Employees can exchange messages, share files, and collaborate on projects directly within the software. Stay updated with real-time notifications, task progress, and project status. Additionally, our software provides comprehensive reporting and analytics, giving you insights into employee performance, project timelines, and resource allocation.</div></div>
      </div>
      <div className="flex mt-4  items-center justify-center pt-4 pb-3 ">
        <div className="mr-2"><a href=""><FaFacebook color="white"/></a></div>
        <div className="mr-2"><a href=""><FaInstagram color="white"/></a></div>
        <div className="mr-2"> <a href=""><FaTwitter color="white"/></a></div>
      </div>
      </div>
      <footer className="flex items-center justify-center text-white text-sm pt-4 pb-4">@ 2023 DIANA ADVANCED TECH ACADEMY | Get the World's best IT Courses | Privacy Policy</footer>
      
    </div>
  );
};

export default NewHome;