import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

function Employe() {
  return (
    <div className=' dark:text-white text-navy-800  bg-lightPrimary dark:bg-navy-900 '>
      <Navbar/>
      <div className='mt-14 justify-center flex'>
         <Link className='mx-5 px-5 py -5' to="employe">employe</Link>
         <Link className='mx-5 px-5 py -5' to="addemploye">Add Employe</Link>
         </div>
         <Outlet/>
   
    </div>
  )
}

export default Employe
