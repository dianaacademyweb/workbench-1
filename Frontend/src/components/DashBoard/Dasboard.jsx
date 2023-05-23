import React from 'react';
import { useAuth } from '../../context/AuthContext'
import Dash from '../../layouts/admin/Dash';


function Dasboard() {
  let {token} = useAuth()
  return (
    <div className='h-full w-full bg-lightPrimary dark:!bg-navy-900'>
      
      
     <div className=''></div>
     <Dash/>
     <h1 className='text-4xl text-navy-700 flex justify-center  dark:text-white dark:hover:text-white'>Work warden </h1>
     <h1 className=' mt-5 text-black text-navy-700 flex justify-center  dark:text-white dark:hover:text-white'> this is the dashboard of</h1>
     <div className='mt-[500px]'> hello </div>
     <div className='mt-[600px]'>2nd part</div>
    </div>
    
  )
}
export default Dasboard