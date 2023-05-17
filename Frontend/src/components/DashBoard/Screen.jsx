import React from 'react';
import screen from '../../assets/Images/screen.png';

const ScreenshotsRow = () => {
  return (
    <div className="flex mt-16 justify-center ">
     <div className='mx-2'>
        <p className=' py-2 px-4 text-sm dark:text-white dark:hover:text-white '>07:01pm</p>
     <img
        src={screen}
        alt="screenshot 1"
        className="h-[140px] w-[230px] mr-4  shadow-2xl dark:border-white border-blue-400 border-2 py-2 px-2 mx-4 my-3 rounded-md"
      />
     </div>
     <div className='mx-2'>
        <p className=' py-2 px-4 text-sm dark:text-white dark:hover:text-white'>07:01pm</p>
     <img
        src={screen}
        alt="screenshot 1"
        className="h-[140px] w-[230px] mr-4  shadow-2xl border-blue-500 dark:border-white border-2 py-2 px-2 mx-4 my-3 rounded-md"
      />
     </div>
     <div className='mx-2'>
        <p className=' py-2 px-4 text-sm dark:text-white dark:hover:text-white'>07:01pm</p>
     <img
        src={screen}
        alt="screenshot 1"
        className="h-[140px] w-[230px] mr-4  shadow-2xl border-blue-500 dark:border-white border-2 py-2 px-2 mx-4 my-3 rounded-md"
      />
     </div>
     <div className='mx-2'>
        <p className=' py-2 px-4 text-sm dark:text-white dark:hover:text-white'>07:01pm</p>
     <img
        src={screen}
        alt="screenshot 1"
        className="h-[140px] w-[230px] mr-4  shadow-2xl dark:border-white border-blue-500 border-2 py-2 px-2 mx-4 my-3 rounded-md"
      />
     </div>
     <div className='mx-2'>
        <p className=' py-2 px-4 text-sm dark:text-white dark:hover:text-white'>07:01pm</p>
     <img
        src={screen}
        alt="screenshot 1"
        className="h-[140px] w-[230px] mr-4  shadow-2xl dark:border-white border-blue-500 border-2 py-2 px-2 mx-4 my-3 rounded-md"
      />
     </div>

    </div>
  );
};

export default ScreenshotsRow;