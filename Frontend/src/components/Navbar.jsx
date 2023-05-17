import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import Logout from './LoginPage/logout'

function Navbar()  {
 const {user} = useAuth();
  return (
        <nav className=" top-2 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-[#1b33bb4d]">
        <img src="" alt="WorkWarden" className="w-[100px] h-[px] text-white"  />
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
         <li className="font-poppins font-normal cursor-pointer text-[16px] text-white px-5 py-5">
         <Link to="/" >Home</Link>
         </li>
         <span> <span></span></span>
         <li className="font-poppins font-normal cursor-pointer text-[16px]  text-white px-5 py-5">
         <Link to= "/dashboard">Dashboard</Link>
         </li>
         <span> <span></span></span>
         <li className="font-poppins font-normal cursor-pointer text-[16px] text-white px-5 py-5 ">
         {user ? ( 
        <p onClick={Logout}>logout</p>

      ):(
        <Link to= "/login">Login </Link>
      )
      
    }
         </li>
         <span> <span></span></span>

        </ul>
      </nav>
  )
}

export default Navbar
