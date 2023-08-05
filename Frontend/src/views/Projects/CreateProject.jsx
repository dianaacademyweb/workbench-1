import React, { useState } from 'react';
import axios from 'axios';
import DashApi from '../../dashboard/auth';
import EmployeeProjectLinkerForm from './AssignProject';

const CreateProject = () => {
  const id = localStorage.getItem("id");
  const [organization_id, setOrgnization] = useState(id);
  const [error, setError] = useState(undefined);
  const [project_name, setName] = useState("");
  const [peoject_description,setProject] = useState("");

  const Create = async (e) => {
    if (e){
      e.preventDefault();
    }
    if (project_name === "") {
      return setError("You must enter the project name");
    }
    if (peoject_description === "") {
        return setError("You must enter the description");
      }
    try {
      let  response = await DashApi.createProject({
        project_name,
        peoject_description,
        organization_id,
      });
      console.log(response) // Replace 'API_URL' with your actual API endpoint
      if (response.data && response.status === 201 ) {
        return setError("project created succesfullly");
      } // Handle the response as needed
    } catch (error) {
      console.error(error);
      if (error.response) {
        return setError(err.response.data.msg);
      }
      return setError('There has been an error.');
    }
  };

  return (
   
   <div className='flex flex-col items-center justify-center min-h-screen w-full bg-lightgray'>
    <div className='sm:w-2/3 bg-lightgray  rounded shawdow-lg p-8 m-4 lg:m-12'>
      <h1 className="block w-full text-center text-grey-darkest mb-6 text-2xl">CREATE PROJECT</h1>
      <form className="mb-4 md:flex flex-col md:justify-between" action='POST '>
        <div className="flex flex-col mb-4  lg:w-full">
          <label htmlFor="e_name"className='mb-2 uppercase  font-bold text-lg text-grey-darkest'>Project Name</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            value={project_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border py-2 px-3 text-grey-darkest md:mr-2"
          />
        </div>
        <div  className="flex flex-col mb-4  lg:w-full">
        <label className='mb-2 uppercase  font-bold text-lg text-grey-darkest' htmlFor="e_name">Project Description</label>
          <input
            type="text"
            id="peoject_description"
            name="peoject_description"
            value={peoject_description}
            onChange={(event) => {
                setProject(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <h1 className='text-red-500'>{error}</h1>
        <button
          type="submit" 
          onClick={Create}
          className="bg-white hover:bg-lightPrimary   hover:text-white shadow-lg text-lightPrimary px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      
    </div>
    <h1 className='flex dark:text-lightPrimary text-2xl '> Assign employee to a Project</h1>
    <EmployeeProjectLinkerForm/>
   </div>

  );
};

export default CreateProject;

