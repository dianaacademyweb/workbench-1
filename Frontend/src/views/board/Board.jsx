import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Board() {
  return (
    <div>
      <div>
         <Link to="Board">Board</Link>
         <Link to="createboard">Add Board</Link>
         </div>
         <Outlet/>
    </div>
  )
}

export default Board
