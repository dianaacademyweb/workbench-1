import React, { useState , useEffect } from 'react';
import DashApi from '../../dashboard/auth';
import { useNavigate } from "react-router-dom";

const TeamAdd = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState([]);
  const id = localStorage.getItem("id");
  const [organization_id, setSelectedOrganizationId] = useState(id);
  const [board_id, setSelectedBoard] = useState(id);
  const [error, setError] = useState(undefined);
  const [team_name, setName] = useState("");
  const [team_desc , setdescription] = useState("");

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
      } catch (error) {
        console.log(error);
        if (error.response) {
          return setError(error.response.data.msg);
        }
        return setError('There has been an error.');
      }
    };

    Boardlist(); // Call the function here

  }, []);

  const Create = async (e) => {
    if (e){
      e.preventDefault();
    }
    if (team_name === "") {
      return setError("You must enter your first name.");
    }
    if (team_desc === "") {
      return setError("You must enter some description ");
    }
    try {
      let  response = await DashApi.createteam({
        organization_id,
        team_name,
        team_desc,
        board_id,
      }); 
      console.log(response);
      if (response.data && response.status === 201) {
        return navigate("/teams");
        // return setError("Team created succesfullly");
      } // Handle the response as needed// Replace 'API_URL' with your actual API endpoint
       // Handle the response as needed
    } catch (error) {
      // console.error(error);
      if (error.response) {
        return setError(error.response.data.msg);
      }
      return setError('There has been an error.');
    }
  };



  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
   
   <div>
    <div className='flex justify-end'>
   
    </div>
     <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Create Teams</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label htmlFor = "board_name" >Name:</label>
          <input
            type="text"
            id="board_name"
            name="board_name"
            value={team_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="block border border-gray-300 p-2 rounded"
          />
 <div>
      <label>
        Board:
        <select className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm' value={board_id} onChange={handleBoardChange}>
          <option value="">Select Board</option>
          {board.map(board => (
            <option key={board.id} value={board.id}>{board.board_name}</option>
          ))}
        </select>
      </label>
      </div>


            <label htmlFor = "description" >Description</label>
           <input
            type="text"
            id="description"
            name="description"
            value={team_desc}
            onChange={(event) => {
              setdescription(event.target.value);
              setError(undefined);}
            }

            
            className=" block border border-gray-300 p-2 rounded"
          />
        </div>
        <h1 className='text-green-500 ' >{error}</h1> 
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
  );
};

export default TeamAdd;

