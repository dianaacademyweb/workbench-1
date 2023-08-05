import React from 'react'

import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

function Teams() {
  return (
    <div className='  text-navy-800  bg-lightPrimary dark:bg-navy-900 '>
      <Navbar/>
      <div className='mt-14 justify-center flex'>
      
       </div>

         <Outlet/>
   
    </div>
  )
}

export default Teams
