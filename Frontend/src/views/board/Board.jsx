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
          <button className='mx-5 mt-5 px-5 py-5'><Link to="allboard">all board</Link></button>
          <button className='mx-5 mt-5 px-5 py-5'> <Link to="createboard">create Board</Link></button>
          <button className='mx-5 mt-5 px-5 py-5'> <Link to="projects">projects</Link></button>
          <button className='mx-5 mt-5 px-5 py-5'> <Link to="listprojects">list Projects</Link></button>
         </div>
         <Outlet/>
        </div>
    </div>
  )
}

export default Board
