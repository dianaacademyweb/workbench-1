import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Employe() {
  return (
    <div>
      <div>
         <Link to="employe">employe</Link>
         <Link to="addemploye">Add Employe</Link>
         </div>
         <Outlet/>
   
    </div>
  )
}

export default Employe
