import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

function Employee() {
  return (
    <div className=' dark:text-white text-navy-800  bg-blue-100 dark:bg-navy-900 '>
      <Navbar/>
      <div className='mt-10 justify-center flex '>
      
       </div> 
       <div className='flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border'>
        <h1 className='text-2xl py-6 px-4 text-black  dark:text-white dark:bg-navy-900 rounded-3xl'>EMPLOYEES</h1>
       <button className='my-4 rounded-3xl bg-white border-blue-400 border mx-4 dark:text-white text-navy-900 dark:bg-navy-800 '>     
      <Link className='px-4 text-blue-400 dark:text-white' to="addemploye">+ Add Employe</Link>
</button>
       </div>
         <Outlet/>
   
    </div>
  )
}

export default Employee;
