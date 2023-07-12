import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashApi from '../../dashboard/auth';

const Addtask = () => {
  const id = localStorage.getItem("id");

// storing all the projects ,employess and board in use states

  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [board, setBoard] = useState([]);

// getting the ids from the use effects hook and storing in usestates

  const [board_id, setSelectedBoard] = useState('');
  const [project_id, setSelectedProjectId] = useState('');
  const [orgnisation_id, setSelectedOrganizationId] = useState(id);
  const [employe_id, setSelectedEmployeeId] = useState('');


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
        return setError('There has been an error.');
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
        
        if (response.data && response.data.success === true) {
            console.log(response);
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
        return setError('There has been an error.');
      }
    };

    Boardlist(); // Call the function here

  }, []);



  const Add = async (e) => {
    if (e){
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
      let  response = await DashApi.createTask({
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
      if (response.data && response.status === 201 ) {
        return setError("task created succesfullly");
      }  // Replace 'API_URL' with your actual API endpoint
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      if (error.response) {
        return setError(error.response.data.msg);
      }
      return setError('There has been an error.');
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
  }


  return (
   
   <div className="flex justify-center items-center  ">
     <div className=" p-8 bg-white dark:bg-gray-900 rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center  text-gray-800 dark:text-white">Add a task</h1>
      <form onSubmit={handleSubmit}>
        <div className="">

       <div>
       <label className='text-gray-800 dark:text-white px-2 py-2  '>
        Project:
        <select className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm' value={project_id} onChange={handleProjectChange}>
          <option value="">Select Project</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.project_name}</option>
          ))}
        </select>
      </label>
       </div>
      

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


<div>
  
<label>
        Employee:
        <select className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm' value={employe_id} onChange={handleEmployeeChange}>
          <option value="">Select Employee</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>{employee.username}</option>
          ))}
        </select>
      </label>
</div>


          <label htmlFor="Task Name">Task Name </label>
          <input
            type="text"
            id="task_name"
            name="tsk_name"
            value={task_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        <div className="">
          <label htmlFor="Task_description">Task Description</label>
          <input
            type="text"
            id="Task_description"
            name="Task_description"
            value={task_desc}
            onChange={(event) => {
              setdesc(event.target.value);
              setError(undefined);}
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        <div className="">
          <label htmlFor="Task Status">Task Status</label>
          <input
            type="text"
            id="Task Status"
            name="Task Status"
            value={task_status}
            onChange={(event) => {
              setstatus(event.target.value);
              setError(undefined);}
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        <div className="">
          <label htmlFor="Task Priority">Task Priority</label>
          <input
            type="Task Priority"
            id="Task Priority"
            name="Task Priority"
            value={task_priority}
            onChange={(event) => {
              setpriority(event.target.value);
              setError(undefined);}
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        <div className="">
          <label htmlFor="task_assign_date">Task Assign data</label>
          <input
            type="date"
            id="Date"
            name="date"
            value={task_assign_date}
            onChange={(event) => {
              setassigndate(event.target.value);
              setError(undefined);}
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        <div className="">
          <label htmlFor="">deadline date</label>
          <input
            type="date"
            id="deadline date"
            name="deadline date"
            value={task_deadline_date}
            onChange={(event) => {
              settaskdeadline(event.target.value);
              setError(undefined);}
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        <div className="">
          <label htmlFor="Task Update">Task Update</label>
          <input
            type="date"
            id="Task Update date"
            name="Task Update date"
            value={task_update_date}
            onChange={(event) => {
              setupdatedate(event.target.value);
              setError(undefined);

            }
            }
            className='my-1 px-14 py-3 bg-navy-800 rounded-md text-white text-sm'
          />
        </div>
        
          <h1 className='text-green-500 text-center"'>{error}</h1>
        <button
          type="submit" 
          onClick={Add}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
  );
};

export default Addtask;