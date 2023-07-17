import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

const SetTop=()=> {
  return (
    <div className=' dark:text-white text-navy-800  bg-lightPrimary dark:bg-navy-900 '>
      <Navbar/>
      <div className='mt-14 justify-center flex'>
      
       </div>
       
         <Outlet/>
   </div>
 
  )
}

export default SetTop






