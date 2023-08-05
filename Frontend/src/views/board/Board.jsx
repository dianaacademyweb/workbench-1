import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar  from '../../components/navbar/index'

function Board() {
  return (
    <div className='dark:bg-navy-800'>
        <Navbar/>
      <div className='text-black p-4 bg-lightgray  rounded-xl'>
        <div className='flex justify-between'>
          <button className=' px-3 py-1 md:text-lg sm:text-sm text-[10px]  bg-white dark:border-lightPrimary border text-lightPrimary  dark:bg-white dark:text-lightPrimary rounded-xl'><Link  className='text-sm' to="allboard">ALL Board</Link></button>
          <button className=' px-3 py-1 md:text-lg sm:text-sm text-[10px] bg-white dark:border-lightPrimary border text-lightPrimary  dark:bg-white dark:text-lightPrimary rounded-xl'> <Link className='text-sm' to="createboard">Create Board</Link></button>
          <button className=' px-3 py-1 md:text-lg sm:text-sm text-[10px] bg-white dark:border-lightPrimary border text-lightPrimary  dark:bg-white dark:text-lightPrimary rounded-xl'> <Link className='text-sm' to="projects">Projects</Link></button>
          <button className=' px-3 py-1 md:text-lg sm:text-sm text-[10px] bg-white dark:border-lightPrimary border text-lightPrimary  dark:bg-white dark:text-lightPrimary rounded-xl'> <Link className='text-sm' to="listprojects">List Projects</Link></button>

         </div>
        
        </div>
        <Outlet/> 
    </div>
  )
}

export default Board
