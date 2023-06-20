import React from "react";
import logo from '/src/assets/Images/loginimage/logo.png';
import homeimage from "../assets/Images/layouts/home.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import '/src/App.jsx'

const NewHome = () => {
  return (
    <div className=" bg-cover bg-no-repeat " style={{ backgroundImage: `url(${homeimage})` }}>
      <div className="logo w-16 h-18 pt-6 pb-4 ml-10  ">
        <a href="http://www.dianaadvancedtechacademy.uk/"><img src={logo} alt="Logo"/></a>
      </div>
      <div className="shadow-xl box mx-auto pt-2 ml-24 mr-24 shadow-2xl bg-cover bg-no-repeat py-3" style={{ backgroundImage: `url(${homeimage})` }}  >

      {/* here the navigation bar started  */}
      <nav className="flex m-4 pt-2 text-white   text-3xl items-center justify-between font-bernard">
        <div className="company-name ml-6 sm:mb-0"><a href="" className="hover:text-gray-900">DIANA'S</a></div>
        <ul className="flex">
          <li className="mr-8"><a href="" className=" hover:text-gray-900">HOME</a></li>
          <li className="mr-8"><a href="/team"  className=" hover:text-gray-900">OUR TEAM</a></li>
          <li className="mr-8"><a href="/login"  className=" hover:text-gray-900">LOGIN</a></li>
          <li className="mr-8"><a href=""  className=" hover:text-gray-900">CONTACT US</a></li>
          <li className="mr-8"><a href=""  className=" hover:text-gray-900">&#8801;</a></li>
        </ul>
      </nav>


    {/* navigation bar ended */}
      <div className="flex  items-center justify-center">
      <h2 className="text-3xl  mb-4 text-white font-arial-rounded">WELCOME TO DIANA EMPLOYMENT PORTAL</h2>
      </div>
      <div className="flex  text-white items-center justify-center tracking-custom-wide  font-poppins marquee" >A TEAM WORK'S TOGETHER, STAY'S TOGETHER AND ACHIVE GREATNESS TOGETHER.</div>
      <div className="flex flex-col sm:flex-row mt-4 m-4 justify-between text-white text-lg">
        <div className="box w-1/3  bg-gray-200 h-80 ml-8 shadow-2xl border border-gray-400"><div className="inner-box  font-calibri   p-2   h-full overflow-hidden">Our employee management software helps you efficiently manage your workforce, automate tasks, and boost productivity. With our intuitive interface, you can easily create and manage teams, add employees, and organize them according to departments, projects, or roles</div></div>
        <div className="box w-1/3  bg-gray-200 h-80 ml-8 shadow-2xl border border-gray-400"><div className="inner-box  font-calibri   p-2   h-full overflow-hidden">Simplify the employee onboarding process by centralizing all employee data in one place. Track employee progress, manage training programs, and monitor performance evaluations. Our software also allows you to assign projects, tasks, and deadlines to individual employees or teams</div></div>
        <div className="box w-1/3  bg-gray-200 h-80 ml-8 mr-8 shadow-2xl border border-gray-400"><div className="inner-box  font-calibri   p-2   h-full overflow-hidden">Faster collaboration within your organization with built-in communication and collaboration tools. Employees can exchange messages, share files, and collaborate on projects directly within the software. Stay updated with real-time notifications, task progress, and project status</div></div>
      </div>



      {/* icons div  */}
      <div className="flex mt-4  items-center justify-center pt-7 pb-3 ">
        <div className="mr-2"><a href=""><FaFacebook color="white"/></a></div>
        <div className="mr-2"><a href=""><FaInstagram color="white"/></a></div>
        <div className="mr-2"> <a href=""><FaTwitter color="white"/></a></div>
      </div>
{/* icons div ended  */}


      </div>
      <footer className="flex items-center justify-center text-white footer pt-4 pb-4">@ 2023 DIANA ADVANCED TECH ACADEMY | Get the World's best IT Courses | Privacy Policy</footer>
      
    </div>
  );
};

export default NewHome;
