import React, { useState } from 'react';
import DashApi from '../../dashboard/auth';

const Createboard = () => {
  const id = localStorage.getItem("id");
  const [orgnisation_id, setOrgnization] = useState(id);
  const [error, setError] = useState(undefined);
  const [board_name, setName] = useState("");

  const Create = async (e) => {
    if (e){
      e.preventDefault();
    }
    if (board_name === "") {
      return setError("You must enter your first name.");
    }
    try {
      let  response = await DashApi.createboard({
        board_name,
        orgnisation_id,
      }); 
      console.log(response);
      if (response.data && response.status === 201) {
        return setError("Board created succesfullly");
      } // Handle the response as needed// Replace 'API_URL' with your actual API endpoint
       // Handle the response as needed
    } catch (error) {
      // console.error(error);
      if (error.response) {
        return setError(err.response.data.msg);
      }
      return setError('There has been an error.');
    }
  };

  return (
   
   <div>
    <div className='flex items-center justify-center mx-auto bg-teal-200 h-screen'>
     <div className="w-1/4 rounded shadow-lg bg-white p-8 m-4">
      <h1 className="block w-full text-center text-grey-darkest mb-6 text-2xl">CREATE BOARD</h1>
      <form action='POST '>
        <div className="mb-4 flex flex-col ">
          <label for = "board_name" className='mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest'>Name</label>
          <input
            type="text"
            id="board_name"
            name="board_name"
            value={board_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <h1 className='text-red-500 ' >{error}</h1> 
        <button
          type="submit" 
          onClick={Create}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        
      </form>
    </div>
   </div>
   </div>
  );
};

export default Createboard;

