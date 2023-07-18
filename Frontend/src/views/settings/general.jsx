import React from 'react'
import SetTop from './SetTop'
import { FiCheckCircle } from 'react-icons/fi';

const General = () => {
    const handleEnableClick = () => {
        console.log('Enable button clicked');
        // Add your enable logic here
      };
  return (
    <div>
        <SetTop/>
        <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          GENERAL (GLOBAL)
        </h1>
        </div>
        <div className='bg-white m-4 min-h-screen dark:text-white dark:bg-navy-900 rounded-3xl'>
        <div className='flex gap-4'>
        <div className='flex p-5'>
            <h1>CAPTURE SCREENSHOTS</h1>
        <a
                  href="#"
                  onClick={handleEnableClick}
                  className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
                >
                  <FiCheckCircle className="inline-block" />
                  Enabled
                </a>
        
        </div>
        <div className='flex p-5'>
            <h1>INTILLEGENT SCREENSHOTS</h1>
        <a
                  href="#"
                  onClick={handleEnableClick}
                  className="text-green-300 hover:bg-green-700 hover:text-white  rounded-md text-sm font-medium"
                >
                  <FiCheckCircle className="inline-block" />
                  Enabled
                </a>
        
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default General