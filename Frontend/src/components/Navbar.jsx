import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import Logout from './LoginPage/logout'
import Avatar from '../assets/Images/avatars/avatar10.png'

function Navbar()  {
 const {user} = useAuth();
  return (
        <nav className=" top-2 z-40 flex flex-row flex-wrap items-center justify-between bg-navy-900">
        <img  src={Avatar} alt="WorkWarden" className="w-[100px] h-[px] text-white rounded-[100px]"   />
        <ul className="list-none sm:flex  justify-center items-center flex-1">
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
