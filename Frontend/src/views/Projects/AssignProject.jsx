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
    <form onSubmit={handleSubmit}>
      <label>
        Project:
        <select value={p_id} onChange={handleProjectChange}>
          <option value="">Select Project</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.project_name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Employee:
        <select value={e_id} onChange={handleEmployeeChange}>
          <option value="">Select Employee</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>{employee.e_name}</option>
          ))}
        </select>
      </label>
      <br />
      <button className='border-2 rounded px-4 py-4 shadow-sm' type="submit" onClick={Create}> Create</button>
      <h1 className='mb-[100px]'>{error}</h1>
    </form>
  );
};
export default EmployeeProjectLinkerForm;
