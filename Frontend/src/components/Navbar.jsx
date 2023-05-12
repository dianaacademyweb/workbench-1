import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import Logout from './LoginPage/logout'

function Navbar()  {
 const {user} = useAuth();
  return (
      <div>
        <nav className="bg-black-gradient w-full flex py-3  ms:auto items-center fixed px-10 navbar top-0 left-0 z-50">
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
      </div>
  )
}

export default Navbar
