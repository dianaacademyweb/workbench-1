import React from 'react'
import Top from './Top'
const TimeLog = () => {
  return (
    <div>
        <Top/>
        <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary  dark:bg-navy-900 rounded-3xl">
          TIME LOG SUMMARY
        </h1>
    </div>
    <div className='bg-white min-h-screen text-lightPrimary dark:bg-navy-900 rounded-3xl m-4'>
      <div>
        <ul className='flex gap-6 m-6 text-xl pt-4'>
          <li>
            <a
              href=''
           
            >
              LAST SEVEN DAYS 
            </a>
          </li>
          <li>
            <a
              href=''
             
              
            >
              MONTHLY REPORTS
            </a>
          </li>
          
        </ul>
        <hr className='m-6' />
      </div>
    </div>
    </div>
  )
}

export default TimeLog