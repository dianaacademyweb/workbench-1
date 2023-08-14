import React, { useState, useEffect } from "react";
import DashApi from "../../dashboard/auth";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card";

const TeamAdd = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState([]);
  const id = localStorage.getItem("id");
  const [organization_id, setSelectedOrganizationId] = useState(id);
  const [board_id, setSelectedBoard] = useState(id);
  const [error, setError] = useState(undefined);
  const [team_name, setName] = useState("");
  const [team_desc, setdescription] = useState("");

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
        return setError("There has been an error.");
      }
    };

    Boardlist(); // Call the function here
  }, []);

  const Create = async (e) => {
    if (e) {
      e.preventDefault();
    }
    if (team_name === "") {
      return setError("You must enter your first name.");
    }
    if (team_desc === "") {
      return setError("You must enter some description ");
    }
    try {
      let response = await DashApi.createteam({
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
      return setError("There has been an error.");
    }
  };

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Card>
        <div className="flex w-1/3 items-center justify-center mx-auto  rounded-xl shadow-xs py-2 ">
          <div className="rounded w-full shadow-lg p-8 m-4">
            <h1 className=" w-full text-center text-grey-darkest mb-6 text-2xl">Create Teams</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col ">
                <label htmlFor="board_name"
                className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >Name:</label>
                <input
                  type="text"
                  id="board_name"
                  name="board_name"
                  value={team_name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError(undefined);
                  }}
                  className="border border-gray-300 p-2 rounded"
                />
                <div>
                  <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">
                    Board:
                    <select
                      className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                      value={board_id}
                      onChange={handleBoardChange}
                    >
                      <option value="">Select Board</option>
                      {board.map((board) => (
                        <option key={board.id} value={board.id}>
                          {board.board_name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label htmlFor="description" className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={team_desc}
                  onChange={(event) => {
                    setdescription(event.target.value);
                    setError(undefined);
                  }}
                  className=" border border-gray-300 p-2 rounded"
                />
              </div>
              <h1 className="text-green-500 ">{error}</h1>
              <button
                type="submit"
                onClick={Create}
                className="bg-white text-lightPrimary hover:bg-lightPrimary hover:text-white  px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamAdd;
