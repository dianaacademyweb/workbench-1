import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Navbar()  {
  let {user} = useContext(AuthContext)
  return (
    <div>
      <Link to="/" >Home   </Link>

      <span>!</span>

      
      <Link to= "/dashboard">Dashboard</Link>
      <span> | </span>
      {user ? ( 
        <p>logout</p>

      ):(
        <Link to= "/login">Login </Link>
      )
      
    }
      {user && <p>hello {user.username}</p> }
      
    </div>
  )
}

export default Navbar
