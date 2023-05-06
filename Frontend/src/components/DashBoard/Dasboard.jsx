import React from 'react';
import  { useContext } from 'react'
import AuthContext from '../../context/AuthContext';

function Dasboard() {
  let {user} = useContext(AuthContext)
  return (
    <div className='mt-28'>
    
     <h1>hello  you are authenticated {user && <p>{user.username}</p> } here is the dashboard </h1>
    </div>
  )
}

export default Dasboard
