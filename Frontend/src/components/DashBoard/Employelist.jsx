import React from 'react';
import { FiSearch } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";


const Sidebar = () => {
  const people = ['Ashish','Reeza', 'John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams' ];

  return (
    <div className=" h-[180px] w-[250px]">
      <div className='flex h-full items-center  text-navy-700 dark:bg-navy-900'>
        <p className="pl-3 pr-2 text-xl flex">
        <FiSearch className="h-4 w-4 text-gray-400 dark:text-white align-center flex "/>
        </p>
        <input
            type="text"
            placeholder="Search employe"
            className=" px-4 py-2 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
      </div>
      <div className=" mx-5   border-2 dark:border-white border-navy-400 rounded-md w-[300px] h-[450px]">
          <ul className="mx-4 ">
          {people.map((person, index) => (
            <li
              key={index}
              className=" text-navy-700 flex justify-center  dark:text-white dark:hover:text-white px-8 py-4 cursor-pointer border-2 rounded-md  dark:border-white border-navy-400 my-2 mx-2"
            >
              {person}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;