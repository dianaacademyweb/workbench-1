import React, { useEffect, useState } from 'react';
import DashApi from '../../dashboard/auth';

function EmployeeProjectLinkerForm() {
  const id = localStorage.getItem("id"); 
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(undefined);
  const [o_id, setSelectedOrganizationId] = useState(id);
  const [p_id, setSelectedProjectId] = useState('');
  const [e_id, setSelectedEmployeeId] = useState('');
  useEffect(() => {
    const Projectlist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.ListProject({});
        setProjects(response.data);
        console.log(response);
        if (response.data && response.status === 201 ) {
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
        setEmployees(response.data.employes);
        
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

  const Create = async (e) => {
    if (e){
      e.preventDefault();
    }
    if (p_id === "") {
      return setError("You must enter your first name.");
    }
    try {
      let  response = await DashApi.ProjectLinker({
        p_id,
        e_id,
        o_id,
      }); // Replace 'API_URL' with your actual API endpoint
      console.log(response);
      if (response.data && response.statusText === "Created") {
        return setError("Employe assigned  succesfullly");
      } // Handle the response as needed // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleProjectChange = (event) => {
    setSelectedProjectId(event.target.value);
  };

  const handleEmployeeChange = (event) => {
    setSelectedEmployeeId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send selectedOrganizationId, selectedProjectId, selectedEmployeeId to the API endpoint
    // for creating the employee and project linker
    // Example: fetch('api-url', { method: 'POST', body: { organizationId: selectedOrganizationId, projectId: selectedProjectId, employeeId: selectedEmployeeId } })
    // Handle the API response accordingly
  };

  return (
    <div className=' sm:w-1/3  bg-white rounded shawdow-lg p-8 m-2 '>
    <form className="mb-4 md:flex flex-col md:justify-between " onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4  lg:w-full">
      <label className='mb-2 uppercase font-bold text-lg text-grey-darkest'>
        Project
        <select className="border ml-3 border-gray-300 p-2 rounded " value={p_id} onChange={handleProjectChange}>
          <option value="">Select Project</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.project_name}</option>
          ))}
        </select>
      </label>
      </div>
      <br />
      <label className='mb-2 uppercase font-bold text-lg text-grey-darkest '>
        Employee
        <select className="border ml-3 border-gray-300 p-2 rounded " value={e_id} onChange={handleEmployeeChange}>
          <option value="">Select Employee</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>{employee.username}</option>
          ))}
        </select>
      </label>
      <br />
      <h1 className='text-red-500'>{error}</h1>
      <button className='bg-teal-400 hover:bg-teal-600 text-white px-4 py-2 rounded' type="submit" onClick={Create}> Create</button>
      
    </form>
    </div>
  );
};
export default EmployeeProjectLinkerForm;
