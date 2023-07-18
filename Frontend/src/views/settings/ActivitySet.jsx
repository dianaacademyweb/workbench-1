import React, { useState } from 'react';
import SetTop from './SetTop';
import { FiCheckCircle, FiX, } from 'react-icons/fi';

const ActivitySet = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'groupName') {
      setGroupName(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDisableClick = () => {
    console.log('Disable button clicked');
    // Add your disable logic here
  };

  const handleEnableClick = () => {
    console.log('Enable button clicked');
    // Add your enable logic here
  };

  return (
    <div>
        <SetTop/>
        <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-black dark:text-white dark:bg-navy-900 rounded-3xl">
          ACTIVITY SET
        </h1>
        
      </div>
    <div className="bg-white dark:text-white dark:bg-navy-900 m-4 p-4 min-h-screen rounded-3xl">
      <div className=" mb-4">
        <div className="mb-4">
            <div className='flex'>
            <div className="mr-4 flex flex-col">
            <label className=" mb-2 font-bold ">Select Activity Set</label>
            <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="border border-gray-300 dark:text-white dark:bg-navy-900 p-2 w-full rounded-3xl"
            >
                <option value="">Select an option</option>
                <option value="activity">Activity</option>
                <option value="productivity">Productivity</option>
                <option value="distractive">Distractive</option>
            </select>
            </div>
            <div className='flex m-4'>
            <a
                  href="#"
                  onClick={handleEnableClick}
                  className="text-green-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FiCheckCircle className="inline-block mr-2" />
                  Enabled
                </a>
                <a
                  href="#"
                  onClick={handleDisableClick}
                  className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-400 hover:text-white"
                >
                  <FiX className="inline-block mr-2" />
                  Disabled
                </a>
        </div>
        </div>
        
      </div>
      <div>
      <div >
        <label htmlFor="groupName" className=" mb-2 font-bold">
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          name="groupName"
          value={groupName}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 dark:text-white dark:bg-navy-900 w-full rounded-3xl"
        />
        </div>
      <div className="mb-4">
        <label htmlFor="description" className=" mb-2 font-bold">
          Description
        </label>
        <input
          id="description"
          name="description"
          value={description}
          onChange={handleInputChange}
          className="border border-gray-300 dark:text-white dark:bg-navy-900 p-2 w-full rounded-3xl"
        ></input>
      </div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-blue-200 p-4 rounded">
          <h3 className="font-bold text-xl">Activity</h3>
          {/* Content for the Activity box */}
        </div>

        <div className="w-1/3 bg-yellow-200 p-4 rounded mx-2">
          <h3 className="font-bold text-xl">Productivity</h3>
          {/* Content for the Productivity box */}
        </div>

        <div className="w-1/3 bg-red-200 p-4 rounded">
          <h3 className="font-bold text-xl">Distractive</h3>
          {/* Content for the Distractive box */}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ActivitySet;
