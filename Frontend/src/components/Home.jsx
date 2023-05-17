import React from 'react'
import { useContext } from 'react'
import {useAuth} from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Home() {
  
  return (
    <div className=''>
      <Navbar/>
      <div className='mt-28'> 
      <h1 className='text-black flex justify-center text-4xl '>Work warden</h1>
      <marquee  className =" mt-5 text-4xl" behavior="sliding" direction="left"> <h2 className='text-black  flex justify-end  text-3xl '> we provide employe management system </h2></marquee>
      <h2>this is the home page</h2>
       </div>
     
    </div>
  )
}

export default Home
