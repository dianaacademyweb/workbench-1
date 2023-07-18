import React from 'react'
import SetTop from './SetTop'
const Activity = () => {
  return (
    <div>
        <SetTop/>
        <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          ACTIVITY
        </h1>
        <button className='my-4 px-2 rounded-3xl bg-white border-blue-400 border mx-4 dark:text-white text-navy-900 dark:bg-navy-800 '>     
           {/* <Link className='px-4 text-blue-400 dark:text-white' to="">+ Add Designation</Link> */}
           + Add Activity
        </button>
      </div>
      <div className='bg-white dark:text-white dark:bg-navy-900 m-4 min-h-screen rounded-3xl'>
        <div className='p-6'>
            <input
            type="text"
            placeholder="Search employee"
            className="p-2 flex h-full w-full rounded-full  bg-white text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit border border-navy-500"
          />
          </div>
          <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Activity Set</th>
              
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">employee1</td>
              <td class="whitespace-nowrap px-6 py-4">Activity</td>
           
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">employee2</td>
              <td class="whitespace-nowrap px-6 py-4">Activity</td>
       
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td class="whitespace-nowrap px-6 py-4">employee3</td>
              <td class="whitespace-nowrap px-6 py-4">Activity</td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Activity