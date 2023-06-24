







import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card";

function AllTeams() {
  const [error, setError] = useState(undefined);
  const [Team, setTeam] = useState([]);
  const [team_id, setSelectdteam] = useState('');
  const [teamsdata, setTeamsdata] = useState(null);

  useEffect(() => {
    const Teamlists = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Teamlist();
        setTeam(response.data);
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

    Teamlists(); // Call the function here
  }, []); // Empty dependency array for the initial effect

  const handleteamselect = async (teamid) => {
    try {
      let response = await DashApi.Teamsdetails(teamid);
      console.log(response);
      setTeamsdata(response.data);
      setSelectdteam(event.target.value);
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  return (
    <div className=" bg-lightPrimary py-10 dark:bg-navy-900 mb-[200px] h-full ">
    <div className=" mt-4 py-2 flex w-full h-16 items-center bg-white dark:bg-navy-800  text-navy-700 rounded-full">
      <div className="flex dark:bg-navy-900 rounded-full py-3 mx-2">
        <p className="pl-3 pr-2 text-xl  flex">
          <FiSearch className="h-4 w-4 text-gray-400 dark:text-white  align-center flex " />
        </p>
        <input
          type="text"
          placeholder="Search employe"
          className="px-4 flex h-full w-full rounded-full  bg-white text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
        />
      </div>
    </div>





    <div>
  
  <label>
          Teams
          <select className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm' value={team_id} onChange={(event) => handleteamselect(event.target.value)}>
            <option value=""></option>
            {Team.map(Team => (
              <option key={Team.id} value={Team.id}>{Team.team_name}</option>
            ))}
          </select>
        </label>
  </div>












      {/* <div className="flex gap-1">
        <div className="mt-5   w-1/5 ">
          <Card extra=" p-[20px]">
            <div className=" mt-8 justify-center flex  dark:border-white border-navy-400 rounded-md w-full h-full">
              <div className=" text-xl flex ">
                <button className="justify-center  ">
                  {" "}
                  {board.map((board) => (
                    <li
                      className=" my-4 justify-center flex  items-center   text-navy-700 dark:bg-navy-700 sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-md  dark:text-white "
                      key={board.id}
                      onClick={() => handleboardclick(board.id)}
                    >
                      <h1 className=" justify-center dark:text-white text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
                        {board.board_name}{" "}
                      </h1> */}
                      {/* <span>{employee.e_email}</span> */}
                    {/* </li>
                  ))}
                </button>
              </div>
            </div>
          </Card>
        </div>{" "} */}






        
        <div className=" w-4/5 ml-5  mt-5  ">
          <Card extra=" p-[20px]">
            <div className="py-56">
              {teamsdata && teamsdata.length > 0 && (
                <table className="table-auto w-full">
                  <thead className="border-2">
                    <tr>
                      <th className="border-2 py-2 px-2 justify-center bg-navy-800 text-white ">
                        Teams Name
                      </th>
                      <th className="border-2 py-2 px-2 justify-center bg-navy-800 text-white ">
                        
                        teams desc
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-2 ">
                    {teamsdata.map((team, index) => (
                      <tr key={index} className="border-2 justify-center">
                        <td className="border-2 py-2 px-2 justify-center bg-navy-800 text-white ">
                          {team.team_name}
                        </td>
                        <td className="border-2 py-2 px-2 justify-center bg-navy-800 text-white ">
                          {team.team_desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>
        </div>
      </div>
    // </div>
  );
}

export default AllTeams;
























// import React, { useState, useEffect } from 'react';
// import TaskCard from '../components/TaskCard';
// import DashApi from '../../dashboard/auth';
// import Card from "../../components/card/index";

// function AllTeams() {
//   const [error, setError] = useState(undefined);
//   const [allTeams, setAllTeams] = useState([]);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await DashApi.Teamsdetail();
//         setAllTeams(response.data.tasks);
//         console.log(response.data.tasks)
//         if (response.data && response.data.success === false) {
//           setError(response.data.msg);
//         }
//       } catch (err) {
//         console.log(err);
//         if (err.response) {
//           setError(err.response.data.msg);
//         } else {
//           setError('There has been an error.');
//         }
//       }
//     };

//     fetchTeams();
//   }, []);

//   return (
//       <Card extra="pb-7 p-[20px] mt-5 mx-4">
//       <div className='py-56'>
//         {allTeams.length > 0 && (
//           <table className='table-auto w-full'>
//             <thead className='border-2'>
//               <tr>
//               <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Team Name</th>
//               <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '> team desc</th>
//                 <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Board_name</th>
//               </tr>
//             </thead>
//             <tbody className='border-2 '>
//               {allTeams.map((team, index) => (
//                 <tr key={index} className='border-2 justify-center'>
//                   <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{team.team_name}</td>
//                   <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{team.team_desc}</td>
//                   <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{team.board_name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//       </Card>
//   );
// }

// export default AllTeams;
