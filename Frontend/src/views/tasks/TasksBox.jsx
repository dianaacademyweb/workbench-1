import React, { useState } from 'react';

const TasksBox = () => {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [showClientForm, setShowClientForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const [clientName, setClientName] = useState('');
  const [clientDescription, setClientDescription] = useState('');
  const [clientWebsite, setClientWebsite] = useState('');
  const [clientAssignTeam, setClientAssignTeam] = useState('');
  const [clientAssignEmployee, setClientAssignEmployee] = useState('');

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectClient, setProjectClient] = useState('');
  const [projectAssignTeam, setProjectAssignTeam] = useState('');
  const [projectAssignEmployee, setProjectAssignEmployee] = useState('');

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskProject, setTaskProject] = useState('');
  const [taskAssignEmployee, setTaskAssignEmployee] = useState('');

  const handleAddClient = () => {
    setShowClientForm(true);
  };

  const handleAddProject = () => {
    setShowProjectForm(true);
  };

  const handleAddTask = () => {
    setShowTaskForm(true);
  };

  const handleCancelClient = () => {
    setShowClientForm(false);
    // Reset form fields
    setClientName('');
    setClientDescription('');
    setClientWebsite('');
    setClientAssignTeam('');
    setClientAssignEmployee('');
  };

  const handleCancelProject = () => {
    setShowProjectForm(false);
    // Reset form fields
    setProjectName('');
    setProjectDescription('');
    setProjectClient('');
    setProjectAssignTeam('');
    setProjectAssignEmployee('');
  };

  const handleCancelTask = () => {
    setShowTaskForm(false);
    // Reset form fields
    setTaskName('');
    setTaskDescription('');
    setTaskProject('');
    setTaskAssignEmployee('');
  };

  const handleSubmitClient = (e) => {
    e.preventDefault();
    const newClient = {
      name: clientName,
      description: clientDescription,
      website: clientWebsite,
      assignTeam: clientAssignTeam,
      assignEmployee: clientAssignEmployee,
    };
    setClients([...clients, newClient]);
    setShowClientForm(false);
    // Reset form fields
    setClientName('');
    setClientDescription('');
    setClientWebsite('');
    setClientAssignTeam('');
    setClientAssignEmployee('');
  };

  const handleSubmitProject = (e) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      description: projectDescription,
      client: projectClient,
      assignTeam: projectAssignTeam,
      assignEmployee: projectAssignEmployee,
    };
    setProjects([...projects, newProject]);
    setShowProjectForm(false);
    // Reset form fields
    setProjectName('');
    setProjectDescription('');
    setProjectClient('');
    setProjectAssignTeam('');
    setProjectAssignEmployee('');
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDescription,
      project: taskProject,
      assignEmployee: taskAssignEmployee,
    };
    setTasks([...tasks, newTask]);
    setShowTaskForm(false);
    // Reset form fields
    setTaskName('');
    setTaskDescription('');
    setTaskProject('');
    setTaskAssignEmployee('');
  };

  return (
    <div className="flex mx-auto p-4 gap-4">
      <div className="box bg-white rounded-3xl mb-4 w-1/3">
        <h2 className="text-2xl font-bold mb-2">Clients</h2>
        {clients.map((client, index) => (
          <div key={index} className="border p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
            <p className="mb-1">Description: {client.description}</p>
            <p className="mb-1">Website: {client.website}</p>
            <p className="mb-1">Assign Team: {client.assignTeam}</p>
            <p className="mb-1">Assign Employee: {client.assignEmployee}</p>
          </div>
        ))}
        {showClientForm ? (
          <form onSubmit={handleSubmitClient} className="border bg-teal-200 rounded-3xl p-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            />
            <textarea
              placeholder="Description"
              value={clientDescription}
              onChange={(e) => setClientDescription(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            ></textarea>
            <input
              type="text"
              placeholder="Website"
              value={clientWebsite}
              onChange={(e) => setClientWebsite(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            />
            <select
              value={clientAssignTeam}
              onChange={(e) => setClientAssignTeam(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            >
              <option value="">Assign Team</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
          
            
            <select
              value={clientAssignEmployee}
              onChange={(e) => setClientAssignEmployee(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            >
              <option value="">Assign an Employee</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancelClient}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleAddClient}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        )}
      </div>

      <div className="box bg-white rounded-3xl mb-4 w-1/3 ">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="mb-1">Description: {project.description}</p>
            <p className="mb-1">Client: {project.client}</p>
            <p className="mb-1">Assign Team: {project.assignTeam}</p>
            <p className="mb-1">Assign Employee: {project.assignEmployee}</p>
          </div>
        ))}
        {showProjectForm ? (
          <form onSubmit={handleSubmitProject} className="border bg-teal-200 rounded-3xl p-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            />
            <textarea
              placeholder="Description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            ></textarea>
            <select
              value={projectClient}
              onChange={(e) => setProjectClient(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            >
              <option value="">Select a client</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
            <select
              value={projectAssignTeam}
              onChange={(e) => projectAssignTeam(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            >
              <option value="">Assign Team</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
            <select
                value={projectAssignEmployee}
                onChange={(e) => setProjectAssignEmployee(e.target.value)}
                className="block w-full rounded-md border-gray-300 p-2 mb-2"
                >
                <option value="">Assign an Employee</option>
                {clients.map((client, index) => (
                <option key={index} value={client.name}>
                    {client.name}
                </option>
                ))}
                </select>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancelProject}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleAddProject}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        )}
      </div>

      <div className='box bg-white rounded-3xl mb-4 w-1/3'>
        <h2 className="text-2xl font-bold mb-2">Tasks</h2>
        {tasks.map((task, index) => (
          <div key={index} className="border p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{task.name}</h3>
            <p className="mb-1">Description: {task.description}</p>
            <p className="mb-1">Project: {task.project}</p>
            <p className="mb-1">Assign Employee: {task.assignEmployee}</p>
          </div>
        ))}
        {showTaskForm ? (
          <form onSubmit={handleSubmitTask} className="border bg-teal-200 rounded-3xl p-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            />
            <textarea
              placeholder="Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            ></textarea>
            <select
              value={taskProject}
              onChange={(e) => setTaskProject(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            >
              <option value="">Select a project</option>
              {projects.map((project, index) => (
                <option key={index} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
            <select
              value={taskAssignEmployee}
              onChange={(e) => setTaskAssignEmployee(e.target.value)}
              className="block w-full rounded-md border-gray-300 p-2 mb-2"
            >
              <option value="">Assign an Employee</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancelTask}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default TasksBox;
