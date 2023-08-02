import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

function Employee() {
  return (
    <div className=' dark:text-white text-navy-800  bg-lightPrimary dark:bg-navy-900 '>
      <Navbar/>
      <div className='mt-10 justify-center flex '>
      
       </div> 
       <div className='flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border'>
        <h1 className='text-2xl py-6 px-4 text-lightPrimary  dark:text-white dark:bg-navy-900 rounded-3xl'>EMPLOYEES</h1>
       <button className='my-4 rounded-3xl bg-white border-lightPrimary border mx-4 dark:text-white text-navy-900 dark:bg-navy-800 '>     
      <Link className='px-4 text-lightPrimary dark:text-white' to="addemployee">+ Add Employee</Link>
</button>
       </div>
         <Outlet/>
   
    </div>
  )
}

export default Employee;
