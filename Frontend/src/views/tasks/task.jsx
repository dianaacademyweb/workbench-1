import React, { useState, useEffect } from "react";
import axios from "axios";
import DashApi from "../../dashboard/auth";
import Card from "../../components/card";

const Addtask = () => {
  const id = localStorage.getItem("id");
  const usertype = localStorage.getItem("type");

  // storing all the projects ,employess and board in use states

  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [board, setBoard] = useState([]);

  // getting the ids from the use effects hook and storing in usestates

  const [board_id, setSelectedBoard] = useState("");
  const [project_id, setSelectedProjectId] = useState("");
  const [orgnisation_id, setSelectedOrganizationId] = useState(id);
  const [employe_id, setSelectedEmployeeId] = useState("");

  // setting up all details in usestate hooks to pass on the apis

  const [error, setError] = useState(undefined);
  const [task_name, setName] = useState("");
  const [task_desc, setdesc] = useState("");
  const [task_status, setstatus] = useState("");
  const [task_priority, setpriority] = useState("");
  const [task_assign_date, setassigndate] = useState("");
  const [task_deadline_date, settaskdeadline] = useState("");
  const [task_update_date, setupdatedate] = useState("");
  useEffect(() => {
    const Projectlist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.ListProject({});
        setProjects(response.data);
        console.log(response);
        if (response.data && response.statusText === "Created") {
          return setError("employee assigned succesfully");
        }
      } catch (error) {
        console.log(error);
        if (error.response) {
          return setError(error.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Projectlist(); // Call the function here
  }, []);

  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist({});
        setEmployees(response.data.employes);
        console.log(response);

        if (response.data && response.data.success === true) {
          console.log(response);
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

    Employelist(); // Call the function here
  }, []);

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

  const Add = async (e) => {
    if (e) {
      e.preventDefault();
    }
    if (task_name === "") {
      return setError("You must enter your first name.");
    }
    if (task_desc === "") {
      return setError("You must enter your email.");
    }
    if (task_status === "") {
      return setError("You must enter a password.");
    }
    if (employe_id === "") {
      return setError("You must enter your gender.");
    }
    if (task_assign_date === "") {
      return setError("You must create a contact.");
    }
    if (project_id === "") {
      return setError("You must create a addres.");
    }
    if (board_id === "") {
      return setError("You must create a addres.");
    }
    try {
      let response = await DashApi.createTask({
        task_name,
        task_desc,
        task_status,
        task_priority,
        task_assign_date,
        task_deadline_date,
        task_update_date,
        board_id,
        project_id,
        orgnisation_id,
        employe_id,
      });
      if (response.data && response.status === 201) {
        return setError("task created succesfullly");
      } // Replace 'API_URL' with your actual API endpoint
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      if (error.response) {
        return setError(error.response.data.msg);
      }
      return setError("There has been an error.");
    }
  };

  const handleProjectChange = (event) => {
    setSelectedProjectId(event.target.value);
  };
  const handleEmployeeChange = (event) => {
    setSelectedEmployeeId(event.target.value);
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
        <div className="flex w-1/3 items-center justify-center mx-auto rounded-xl shadow-xs py-2">
          <div className=" rounded w-full shadow-lg p-8 m-4">
            <h1 className=" w-full text-center text-grey-darkest mb-6 text-2xl">
              Add a task
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">
                  Project:
                </label>
                <select
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                  value={project_id}
                  onChange={handleProjectChange}
                >
                  <option value="">Select Project</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.project_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">
                  Board:
                </label>
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
              </div>
              <div className="flex flex-col">
                <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">
                  Employee:
                </label>
                <select
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                  value={employe_id}
                  onChange={handleEmployeeChange}
                >
                  <option value="">Select Employee</option>
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.employeid}>
                      {employee.username}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Task Name"
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="task_name"
                  name="tsk_name"
                  value={task_name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Task_description"
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  Task Description
                </label>
                <input
                  type="text"
                  id="Task_description"
                  name="Task_description"
                  value={task_desc}
                  onChange={(event) => {
                    setdesc(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Task Status"
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  Task Status
                </label>
                <input
                  type="text"
                  id="Task Status"
                  name="Task Status"
                  value={task_status}
                  onChange={(event) => {
                    setstatus(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Task Priority"
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  Task Priority
                </label>
                <input
                  type="Task Priority"
                  id="Task Priority"
                  name="Task Priority"
                  value={task_priority}
                  onChange={(event) => {
                    setpriority(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="task_assign_date"
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  Task Assign data
                </label>
                <input
                  type="date"
                  id="Date"
                  name="date"
                  value={task_assign_date}
                  onChange={(event) => {
                    setassigndate(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  deadline date
                </label>
                <input
                  type="date"
                  id="deadline date"
                  name="deadline date"
                  value={task_deadline_date}
                  onChange={(event) => {
                    settaskdeadline(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Task Update"
                  className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
                >
                  Task Update
                </label>
                <input
                  type="date"
                  id="Task Update date"
                  name="Task Update date"
                  value={task_update_date}
                  onChange={(event) => {
                    setupdatedate(event.target.value);
                    setError(undefined);
                  }}
                  className="my-1 px-14 py-3 bg-navy-800 rounded-md text-lightPrimary text-sm"
                />
              </div>
              <h1 className='text-green-500 text-center"'>{error}</h1>
              <button
                type="submit"
                onClick={Add}
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

export default Addtask;
