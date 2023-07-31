import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar  from '../../components/navbar/index'

function Board() {
  return (
    <div>
        <Navbar/>
      <div className='text-black p-4 bg-white  m-4 rounded-xl'>
        <div className='flex justify-between'>
          <button className=' px-5 py-5  bg-white border-blue-500 border text-blue-500  dark:bg-white dark:text-navy-800 rounded-xl'><Link to="allboard">ALL Board</Link></button>
          <button className=' px-5 py-5 bg-white border-blue-500 border text-blue-500  dark:bg-white dark:text-navy-800 rounded-xl'> <Link to="createboard">Create Board</Link></button>
          <button className=' px-5 py-5 bg-white border-blue-500 border text-blue-500  dark:bg-white dark:text-navy-800 rounded-xl'> <Link to="projects">Projects</Link></button>
          <button className=' px-5 py-5 bg-white border-blue-500 border text-blue-500  dark:bg-white dark:text-navy-800 rounded-xl'> <Link to="listprojects">List Projects</Link></button>
         </div>
        
        </div>
        <Outlet/> 
    </div>
  )
}

export default Board
