import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
     
      <Outlet/>
      <nav className='flex float-right'>
        <button className='rounded-lg py-2 px-4 mx-4  bg-navy-900  dark:bg-navy-800 text-white'> <Link className='' to="profilepage">ProfilePage</Link></button>
        <button className='rounded-lg py-2 px-4 mx-4 bg-navy-800 dark:bg-navy-800 text-white '>  <Link to="Updateprofile">create Profile</Link></button>
      </nav>
    </div>
  )
}

export default Profile;
