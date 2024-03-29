import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card";
import { Link } from "react-router-dom";

function Allboard() {
  const [error, setError] = useState(undefined);
  const [board, setBoard] = useState([]);
  const [board_id, setSelectedBoard] = useState('');
  const [teamsdata, setTeamsdata] = useState(null);

  useEffect(() => {
    const Boardlist = async (event) => {
      if (event) {
        +
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
        return setError("There has been an error.");
      }
    };

    Boardlist(); // Call the function here
  }, []); // Empty dependency array for the initial effect

  const handleboardclick = async (boardId) => {
    setSelectedBoard(event.target.value);
    try {
      let response = await DashApi.Teamsdetails(boardId);
      console.log(response);
      setTeamsdata(response.data);
      
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  return (
    <div className=" bg-lightPriamry py-10 dark:bg-navy-900 mb-[200px] h-full ">
    <div className=" py-2 flex w-full h-16 items-center bg-white dark:bg-navy-800  text-navy-700 rounded-full">
      <div className="flex  dark:bg-navy-900 rounded-full py-3 mx-2">
        <p className="pl-3 pr-2 text-xl  flex">
          <FiSearch className="h-4 w-4 text-gray-400 dark:text-white  align-center flex " />
        </p>
        <input
          type="text"
          placeholder="Search Board"
          className="px-4 flex h-full w-full rounded-full  bg-white text-sm font-medium text-navy-700 outline-none placeholder:!text-lightPrimary dark:bg-navy-900 dark:text-darktext dark:placeholder:!text-darktext sm:w-fit"
        />
      </div>
    <div>
  
  <label className="text-darktext dark:bg-lightgray">
          boards
          <select className='my-1 mx-2 px-14 py-3 border dark:border-blue-500 rounded-md dark:text-lightPrimary  text-white text-sm' value={board_id} onChange={(event) => handleboardclick(event.target.value)}>
            <option className="dark:bg-lightgray" value=""></option>
            {board.map(board => (
              <option key={board.id} value={board.id}>{board.board_name}</option>
            ))}
          </select>
        </label>
  </div>
    </div>

        <div className="m-4">
          <Card extra=" p-[20px] ">
            <div className="py-56">
              {teamsdata && teamsdata.length > 0 && (
                <table className="table-auto w-full">
                  <thead className="border-2">
                    <tr>
                      <th className="border-2 py-2 px-2 justify-center bg-navy-800 text-lightPrimary">
                        Teams Name
                      </th>
                      <th className="border-2 py-2 px-2 justify-center bg-navy-800 text-lightPrimary">
                        
                        teams desc
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-2 text-lightPrimary">
                    {teamsdata.map((team, index) => (
                      <tr key={index} className="border-2 justify-center">
                        <td className="border-2 py-2 px-2 justify-center bg-navy-800 text-lightPrimary ">
                          {team.team_name}
                        </td>
                        <td className="border-2 py-2 px-2 justify-center bg-navy-800 text-lightPrimary ">
                          {team.team_desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>
          <div className="flex gap-1">
        <div className="mt-5   w-1/5 ">
          <Card extra=" p-[20px]">
            <div className=" mt-8 justify-center flex  dark:border-white border-navy-400 rounded-md w-full h-full">
              <div className=" text-xl flex ">
                <button className="justify-center  ">
                  {" "}
                  {board.map((board) => (
                    
                    <Link
                      className=" my-4 justify-center flex  items-center   text-navy-700 dark:bg-navy-700 sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-md  dark:text-white "
                      key={board.id}
                      onClick={() => handleboardclick(board.id)}
                      to={`${board.id}`}
                    >
                      <h1 className=" justify-center dark:text-white text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
                        {board.board_name}{" "}
                      </h1> 
                      {/* <span>{employee.e_email}</span> */}
                     </Link>
                  ))}
                </button>
              </div>
            </div>
          </Card>
        </div>{" "}

        </div>
      </div>
    </div>
  );
}

export default Allboard;
