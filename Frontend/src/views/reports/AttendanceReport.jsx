import React, { useState } from 'react';

import Top from './Top'

const AttendanceReport = () => {
  const [startDate, setStartDate] = useState('');
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  return (
    <div>
        <Top/>
        <div className="md:flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          ATTENDANCE REPORT
        </h1>
        
        <label className="dark:text-white dark:bg-navy-900 m-2">
            select Date:
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="block md:w-full border-gray-300 dark:text-white dark:bg-navy-900 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </label>
          <button className='my-4 rounded-3xl bg-white border-blue-400 border mx-4 dark:text-white text-navy-900 dark:bg-navy-800 '>     
      {/* <Link className='px-4 text-blue-400 dark:text-white' to="addemploye">+ Add Employe</Link> */}
          <p className='px-4 text-blue-400 dark:text-white'>MANAGE DAYS</p>
        </button>
        <button className='my-4 rounded-3xl bg-white border-blue-400 border mx-4 dark:text-white text-navy-900 dark:bg-navy-800 '>     
      {/* <Link className='px-4 text-blue-400 dark:text-white' to="addemploye">+ Add Employe</Link> */}
          <p className='px-4 text-blue-400 dark:text-white'>EXPORT CSV</p>
        </button>
      </div>
      <div className="bg-white m-4 min-h-screen dark:text-white dark:bg-navy-900 rounded-3xl">
      <div className='p-6'>
            <input
            type="text"
            placeholder="Search employee"
            className="p-2 flex h-full w-full rounded-full  bg-white text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit border border-navy-500"
          />
          </div>
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
        
              <th scope="col" class="px-6 py-4">Employee</th>
              <th scope="col" class="px-6 py-4">Team</th>
              <th scope="col" class="px-6 py-4">Days Worked</th>
              <th scope="col" class="px-6 py-4">Off Days</th>
              <th scope="col" class="px-6 py-4">Total Active Hours</th>
              <th scope="col" class="px-6 py-4">Avg Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
             
              <td class="whitespace-nowrap px-6 py-4">employee1</td>
              <td class="whitespace-nowrap px-6 py-4">team1</td>
              <td class="whitespace-nowrap px-6 py-4">Days</td>
              <td class="whitespace-nowrap px-6 py-4">off days</td>
              <td class="whitespace-nowrap px-6 py-4">active hours</td>
              <td class="whitespace-nowrap px-6 py-4">avg</td>
           
            </tr>
            <tr class="border-b dark:border-neutral-500">
            <td class="whitespace-nowrap px-6 py-4">employee2</td>
              <td class="whitespace-nowrap px-6 py-4">team2</td>
              <td class="whitespace-nowrap px-6 py-4">Days</td>
              <td class="whitespace-nowrap px-6 py-4">off days</td>
              <td class="whitespace-nowrap px-6 py-4">active hours</td>
              <td class="whitespace-nowrap px-6 py-4">avg</td>
     
       
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4">employee3</td>
              <td class="whitespace-nowrap px-6 py-4">team3</td>
              <td class="whitespace-nowrap px-6 py-4">Days</td>
              <td class="whitespace-nowrap px-6 py-4">off days</td>
              <td class="whitespace-nowrap px-6 py-4">active hours</td>
              <td class="whitespace-nowrap px-6 py-4">avg</td>

            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AttendanceReport