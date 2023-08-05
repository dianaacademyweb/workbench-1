import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar  from '../../components/navbar/index'

function Board() {
  return (
    <div>
        <Navbar/>
      <div className='text-lightPrimary dark:text-lightPrimary p-4 bg-lightgray dark:bg-navy-800  m-4 rounded-xl'>
        <div className='sm:flex-row flex-col gap-2 sm:gap-0 flex justify-between'>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px]  bg-white  border text-lightPrimary  dark:bg-white  rounded-xl'><Link  className='text-sm' to="allboard">ALL Board</Link></button>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px] bg-white  border text-lightPrimary  dark:bg-white  rounded-xl'> <Link className='text-sm' to="createboard">Create Board</Link></button>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px] bg-white  border text-lightPrimary  dark:bg-white  rounded-xl'> <Link className='text-sm' to="projects">Projects</Link></button>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px] bg-white  border text-lightPrimary  dark:bg-white  rounded-xl'> <Link className='text-sm' to="listprojects">List Projects</Link></button>
         </div>
        
        </div>
        <Outlet/> 
    </div>
  )
}

export default Board
