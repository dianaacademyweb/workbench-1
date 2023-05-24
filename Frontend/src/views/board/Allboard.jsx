import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import DashApi from '../../dashboard/auth';

function Allboard() {
  const[error, setError] = useState(undefined);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const Boardlist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.boardlist({});
        setBoard(response.data);
        console.log(response);
        if (response.data && response.data.success === false) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError('There has been an error.');
      }
    };

    Boardlist(); // Call the function here

  }, []); // Empty dependency array for the initial effect

  return (
    <div className="h-[180px] w-[250px]">
        <h2>here are all board</h2>
      <div className="flex h-full items-center  text-navy-700 dark:bg-navy-900">
        <p className="pl-3 pr-2 text-xl flex">
          <FiSearch className="h-4 w-4 text-gray-400 dark:text-white align-center flex " />
        </p>
        <input
          type="text"
          placeholder="Search employe"
          className="px-4 py-2 block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
        />
      </div>
      <div className="mx-5 border-2 dark:border-white border-navy-400 rounded-md w-[300px] h-[450px]">
        <ul className=" text-xl justify-center">
            <h1>{error}</h1>
          <button className='justify-center ' >  {board.map((board) => (
             <li  className='justify-center flex mx-[70px] items-center   text-navy-700 dark:bg-navy-900 px-2 py-2 border-2 dark:border-white border-navy-400 rounded-md my-2'  key={board.id}>
             <h1 className=' justify-center '>{board.id}</h1>
             <span className=' justify-center'>{board.board_name}, </span>
             {/* <span>{employee.e_email}</span> */}
           </li>
          ))}</button>
        
        </ul>
      </div>
    </div>
  );
}

export default Allboard;

