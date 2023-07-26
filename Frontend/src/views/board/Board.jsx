import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar  from '../../components/navbar/index'

function Board() {
  return (
    <div>
        <Navbar/>
      <div className='text-black '>
        <div className='mt-24'>
          <button className='mx-5 mt-5 px-5 py-5  bg-navy-800 text-white dark:bg-white dark:text-navy-800 rounded-xl'><Link to="allboard">ALL Board</Link></button>
          <button className='mx-5 mt-5 px-5 py-5 bg-navy-800 text-white dark:bg-white dark:text-navy-800 rounded-xl'> <Link to="createboard">Create Board</Link></button>
          <button className='mx-5 mt-5 px-5 py-5 bg-navy-800 text-white dark:bg-white dark:text-navy-800 rounded-xl'> <Link to="projects">Projects</Link></button>
          <button className='mx-5 mt-5 px-5 py-5 bg-navy-800 text-white dark:bg-white dark:text-navy-800 rounded-xl'> <Link to="listprojects">List Projects</Link></button>
         </div>
         <Outlet/>
        </div>
    </div>
  )
}

export default Board
