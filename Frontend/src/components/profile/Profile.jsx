import React from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';

function Profile() {
  return (
    <div>
      <Banner/>
      <nav>
        <Link to="profilepage">ProfilePage</Link>
        <Link to="Updateprofile">Update Profile</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Profile;
