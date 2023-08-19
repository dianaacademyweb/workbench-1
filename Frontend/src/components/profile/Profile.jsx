import React, { useState,useEffect } from 'react'
import { Link  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import DashApi from '../../dashboard/auth';
function Profile() {
  const [profile , setProfile] = useState(null);
  useEffect(() => {
    const SeeProfile = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.SeeProfile();
        setProfile(response.data[0]);
        console.log(response);
        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    SeeProfile(); // Call the function here
  }, []); // Empty dependency array for the initial effect
  return (
    <div>
     
      <Outlet/>
      <nav className='flex flex-col gap-4 float-right'>
        {profile ? (
          <button className='rounded-lg py-2 px-4 mx-4 bg-navy-800 dark:bg-navy-800 text-lightPrimary '>  <Link to="updateprofile">Update Profile</Link></button>
        ):(
          <button className='rounded-lg py-2 px-4 mx-4 bg-navy-800 dark:bg-navy-800 text-lightPrimary '>  <Link to="createprofile">create Profile</Link></button>
        )}
        <button className='rounded-lg py-2 px-4 mx-4  bg-navy-900  dark:bg-navy-800 text-lightPrimary'> <Link className='' to="profilepage">ProfilePage</Link></button>
        
        
      </nav>
    </div>
  )
}

export default Profile;
