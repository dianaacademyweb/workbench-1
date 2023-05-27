import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
     
      <Outlet/>
      <nav className='mt-[400px]'>
        <Link to="profilepage">ProfilePage</Link>
        <Link to="Updateprofile">create Profile</Link>
      </nav>
    </div>
  )
}

export default Profile;
