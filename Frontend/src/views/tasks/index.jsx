import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

function Task() {
  return (
    <div className=' dark:text-white text-navy-800  bg-lightPrimary dark:bg-navy-900 '>
      <Navbar/>
      <div className='mt-14 justify-center flex'>
      
       </div>
       <div className='flex justify-end mx-5 '>
       <button className='px-3 py-3 bg-gray-300 mx-10 dark:text-white text-navy-900 dark:bg-navy-800 rounded-lg'>     
      <Link className='mx-5 px-5 py -5 text-navy-800 dark:text-white' to="addtask">Add Task</Link>
</button>  
       </div>
         <Outlet/>
   
    </div>
  )
}

export default Task
