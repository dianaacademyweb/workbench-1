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
  const [Project_id, setSelectedProjectId] = useState('');
  const [organization_id, setSelectedOrganizationId] = useState(id);
  const [Employe_id, setSelectedEmployeeId] = useState('');


// setting up all details in usestate hooks to pass on the apis 


  const [error, setError] = useState(undefined);
  const [task_name, setName] = useState("");
  const [task_desc, setEmail] = useState("");
  const [task_status, setPassword] = useState("");
  const [task_priority, setGender] = useState("");
  const [task_assign_date, setcontact] = useState("");
  const [task_deadline_date, settaskdeadline] = useState("");
  const [task_update_date, setAddres] = useState("");
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
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
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
        setEmployees(response.data);
        
        if (response.data && response.data.success === true) {
            console.log(response);
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
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
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
    if (Employe_id === "") {
      return setError("You must enter your gender.");
    }
    if (task_assign_date === "") {
      return setError("You must create a contact.");
    }
    if (Project_id === "") {
      return setError("You must create a addres.");
    }
    if (board_id === "") {
      return setError("You must create a addres.");
    }
    try {
      let  response = await DashApi.createEmploye({
       task_name,
       task_desc,
       task_assign_date,
       task_deadline_date,
       task_priority,
       task_status,
       task_update_date,
       organization_id,
       board_id,
       Employe_id,
       Project_id,
       
      });
      if (response.data && response.statusText === "Created") {
        return setError("employe created succesfullly");
      }  // Replace 'API_URL' with your actual API endpoint
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      if (error.response) {
        return setError(err.response.data.msg);
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
   
   <div>
    <div className='flex justify-end'>
    </div>
     <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">

       <div>
       <label>
        Project:
        <select value={Project_id} onChange={handleProjectChange}>
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
        <select value={board_id} onChange={handleBoardChange}>
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
        <select value={Employe_id} onChange={handleEmployeeChange}>
          <option value="">Select Employee</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>{employee.e_name}</option>
          ))}
        </select>
      </label>
</div>


          <label htmlFor="e_name">Name:</label>
          <input
            type="text"
            id="e_name"
            name="e_name"
            value={task_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_name">Name:</label>
          <input
            type="text"
            id="e_name"
            name="e_name"
            value={task_desc}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_name">Name:</label>
          <input
            type="text"
            id="e_name"
            name="e_name"
            value={task_priority}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_email">Email:</label>
          <input
            type="email"
            id="e_email"
            name="e_email"
            value={task_status}
            onChange={(event) => {
              setEmail(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_password">Password:</label>
          <input
            type="password"
            id="e_password"
            name="e_password"
            value={task_update_date}
            onChange={(event) => {
              setPassword(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_gender">Gender:</label>
          <input
            type="text"
            id="e_gender"
            name="e_gender"
            value={task_status}
            onChange={(event) => {
              setGender(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_contact">Contact:</label>
          <input
            type="text"
            id="e_contact"
            name="e_contact"
            value={task_deadline_date}
            onChange={(event) => {
              setcontact(event.target.value);
              setError(undefined);

            }
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="e_address">Address:</label>
          <input
            type="text"
            id="e_address"
            name="e_address"
            value={task_deadline_date}
            onChange={(event) => {
              setAddres(event.target.value);
              setError(undefined);}
            
            }
            
            className="border border-gray-300 p-2 rounded"
          />
          <h1>{error}</h1>
        </div>
        <button
          type="submit" 
          onClick={Add}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
  );
};

export default Addtask;