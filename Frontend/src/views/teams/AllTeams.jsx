import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../components/DeleteConfirmation";

function AllTeams() {
  const navigate = useNavigate();
  const [error, setError] = useState(undefined);
  const [Team, setTeam] = useState([]);
  const [team_id, setSelectdteam] = useState();
  const [teamsdata, setTeamsdata] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(null);


  useEffect(() => {
    const Teamlists = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Teamlist();
        setTeamsdata(response.data)
        console.log(response.data);
        if (response.data && response.data.success === 200) {
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

  const handleteamselect = async (id) => {
    console.log(id)
    setSelectdteam(id);
    try {
      let response = await DashApi.Teamsdetails(id);
      console.log(response);
      setTeam(response.data);
      
    } catch (error) {
      console.error("Error retrieving employee data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
        let response = await DashApi.DeleteTeam(team_id);
        console.log(response);
        setError("employe deleted succesfully")
        return navigate("/dashboard");
      } catch (error) {
        setError("error in deleting the employe")
        console.error("Error in deleting the employe", error);
      }
    // Your delete logic here...
    // For demonstration purposes, let's just toggle the confirmation window.
    setShowConfirmation(false);
  };
  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleBothFunctions = (teamid) => {
    setSelectdteam(teamid);
    handleShowConfirmation();
  };
    

  return (
    <div className=" bg-lightPrimary py-10 dark:bg-navy-900 mb-[200px] h-full ">
    <div className="justify-between mt-4 py-2 flex w-full h-16 items-center bg-white dark:bg-navy-800  text-lightPrimary rounded-full">
      <div className="flex dark:border  dark:bg-navy-900 rounded-full py-3 mx-2">
        <p className="pl-3 pr-2 text-xl  flex">
          <FiSearch className="h-4 w-4 text-gray-400   align-center flex " />
        </p>
        <input
          type="text"
          placeholder="Search employe"
          className="px-4 flex h-full w-full rounded-full  bg-white text-sm font-medium text-lightPrimary outline-none placeholder:!text-gray-400 dark:bg-navy-900  dark:placeholder:!text-white sm:w-fit"
        />
      </div>
      <div className='flex justify-end mx-5 '>
       <button className='px-3 py-3 dark:border  bg-gray-300 mx-10  text-navy-900 dark:bg-navy-800 rounded-lg'>     
      <Link className='mx-5 px-5 py -5 text-navy-800 dark:text-lightPrimary ' to="addteams">Add Teams</Link></button>  
       </div>
    </div>

    <div>
  
  <label className="dark:text-lightPrimary m-4">
          Teams
          <select className='my-1 mx-1 px-14 py-3 bg-gray-300 dark:bg-navy-800 dark:border dark:text-lightPrimary rounded-md text-navy-800 text-sm' value={Team.id} onChange={(event) => handleteamselect(event.target.value)}  >
          
            <option value="" ></option>
            {teamsdata.map(Team => (
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
                      className=" my-4 justify-center flex  items-center   text-navy-700 dark:bg-navy-700 sm:border-1 xs:border-0.5 dark:border-white border-navy-400 rounded-md   "
                      key={board.id}
                      onClick={() => handleboardclick(board.id)}
                    >
                      <h1 className=" justify-center  text-xs sm:text-sm md:text-lg xl:text-2xl md:text-sx px-2 py-2 ">
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
                  <thead className="">
                    <tr>
                      <th className=" py-2 px-2 justify-center  text-navy-800 ">
                        Teams Name
                      </th>
                      <th className=" py-2 px-2 justify-center  text-navy-800 ">
                        
                        teams desc
                      </th>
                      <th className=" py-2 px-2 justify-center text-navy-800  ">
                        
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    {teamsdata.map((team, id) => (
                      <tr key={id} className=" justify-center">
                      <Link to={`${team.id}`}>
                        <td className=" py-2 px-2 justify-center text-navy-800 ">
                          {team.team_name}
                        </td>
                        </Link>
                        <td className=" py-2 px-2 justify-center  text-navy-800 ">
                          {team.team_desc}
                        </td>
                        <h1 className=" py-2 px-2 justify-center  text-navy-800 flex  ">
                          <button  onClick={() => handleBothFunctions(team.id)} className="rounded-xl bg-navy-800 px-2 py-2 text-white">
                            Delete Team
                          </button>

                          {showConfirmation !== null && (
        <DeleteConfirmation
          show={showConfirmation}
          onCancel={() => setShowConfirmation(false)}
          onConfirm={() => handleDelete()}
        />
      )}
                         
                        </h1>

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
