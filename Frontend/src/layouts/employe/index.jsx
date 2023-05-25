import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';

function Employe() {
  return (
    <div>
      <Navbar/>
      <div>
         <Link to="employe">employe</Link>
         <Link to="addemploye">Add Employe</Link>
         </div>
         <Outlet/>
   
    </div>
  )
}

export default Employe
