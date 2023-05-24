import React, { useState } from 'react';
import axios from 'axios';
import DashApi from '../../dashboard/auth';

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
      }); // Replace 'API_URL' with your actual API endpoint
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
   
   <div>
    <div className='flex justify-end'>
   
    </div>
     <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">create Project</h1>
      <form action='POST '>
        <div className="mb-4">
          <label htmlFor="e_name">Project Name</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            value={project_name}
            onChange={(event) => {
              setName(event.target.value);
              setError(undefined);}
            }
            className="border border-gray-300 p-2 rounded"
          />
         
        </div>
        <div>
        <label htmlFor="e_name">Project Description</label>
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
       <h1>{error}</h1>
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

export default CreateProject;

