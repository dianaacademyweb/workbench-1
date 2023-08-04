import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar  from '../../components/navbar/index'

function Board() {
  return (
    <div>
        <Navbar/>
      <div className='text-black p-4 bg-lightgray dark:bg-navy-800  m-4 rounded-xl'>
        <div className='flex justify-between'>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px]  bg-white dark:border-blue-500 border text-lightPrimary  dark:bg-white dark:text-navy-800 rounded-xl'><Link  className='text-sm' to="allboard">ALL Board</Link></button>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px] bg-white dark:border-blue-500 border text-lightPrimary  dark:bg-white dark:text-navy-800 rounded-xl'> <Link className='text-sm' to="createboard">Create Board</Link></button>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px] bg-white dark:border-blue-500 border text-lightPrimary  dark:bg-white dark:text-navy-800 rounded-xl'> <Link className='text-sm' to="projects">Projects</Link></button>
          <button className=' px-3 py-3 md:text-lg sm:text-sm text-[10px] bg-white dark:border-blue-500 border text-lightPrimary  dark:bg-white dark:text-navy-800 rounded-xl'> <Link className='text-sm' to="listprojects">List Projects</Link></button>
         </div>
        
        </div>
        <Outlet/> 
    </div>
  )
}

export default Board
