import React , {useState , useEffect} from 'react'
import Navbar from '../../components/navbar/index'
import { useParams } from 'react-router-dom';
import DashApi from '../../dashboard/auth';
import { useNavigate } from "react-router-dom";
import Card from '../../components/card';




const Projectspage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const [organization_id, setOrgnization] = localStorage.getItem("id");
  const [project_name, setName] = useState('');
  const [peoject_description, setProject] = useState('');
  const [projectId, setProjectId] = useState(null); // To store the fetched project ID


  const { id } = useParams();
  


  // useEffect(() => {
  //   // Fetch project details if projectId is available (meaning we're updating an existing project)
  //   if (projectId) {
  //     fetchProjectDetails();
  //   }
  // }, [projectId]);



  useEffect(() => {
    const projectsdata = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.getProject(id);
        console.log(response);
        setProjectId(response.data.id)
        setName(response.data.project_name)
        setProject(response.data.peoject_description)

        if (response.data && response.data.success === true) {
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

    projectsdata();
  }, []);

  const updateProject = async (e) => {
    if (e){
      e.preventDefault();
    }
    try {
      let response = await DashApi.updateproject( projectId, {
        project_name,
        peoject_description,
        organization_id,
      });
      console.log(response) // Replace 'API_URL' with your actual API endpoint
      if (response.status === 200 ) {
        return setError("project update succesfullly");
      } // Handle the response as needed
    } catch (error) {
      console.error(error);
      if (error.response) {
        return setError(err.response.data.msg);
      }
      return setError('There has been an error.');
    }
  };

  




    const DeleteEmploye= async () => {
      try {
        let response = await DashApi.deleteproject(projectId);
        console.log(response);
        setError("employe deleted succesfully")
        return navigate("/board/listprojects");
      } catch (error) {
        setError("error in deleting the employe")
        console.error("Error in deleting the employe", error);
      }
    }; 

  return (
    <div className='dark:bg-navy-900 h-full w-full'>
    <Navbar />

    <h2 className='text-3xl font-bold mt-4 mb-2'>Projects page</h2>
    <Card extra='mx-4'>
      <div>
        <label className='text-lg font-semibold'>Edit Project Name:</label>
        <input
          type='text'
          value={project_name}
          onChange={(e) => setName(e.target.value)}
          className='block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600'
        />

        <label className='text-lg font-semibold mt-4'>Edit project description:</label>
        <textarea
          value={peoject_description}
          onChange={(e) => setProject(e.target.value)}
          rows='4'
          className='block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600'
        />

        <button
          onClick={updateProject}
          className='btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
        >
          Update Project
        </button>
      </div>
    </Card>

    <div className='mt-8'>
      <h2 className='text-2xl font-bold'>Delete the Employee</h2>
      <button
        className='btn mt-4 px-6 py-2 bg-navy-800 text-white rounded-md hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:ring-opacity-50'
        onClick={DeleteEmploye}
      >
        Delete
      </button>
      {error && <p className='text-red-500 mt-2'>{error}</p>}
    </div>
  </div>
  )
}

export default Projectspage 



