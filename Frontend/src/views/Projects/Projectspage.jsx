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
      if (response.data && response.status === 201 ) {
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
    <div className='flex flex-col justify-center items-center'>
    <h2 className='block w-full text-center text-grey-darkest text-2xl font-bold mt-4 mb-2'>Projects Updating Page</h2>
    <div className='mx-4 sm:w-2/3 bg-white m-4 p-8 rounded shadow-lg lg:m-12'>
      <div>
        <label className='mb-2 uppercase  font-bold text-lg text-grey-darkest'>Edit Project Name:</label>
        <input
          type='text'
          value={project_name}
          onChange={(e) => setName(e.target.value)}
          className='block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600'
        />

        <label className='mb-2 uppercase  font-bold text-lg text-grey-darkest'>Edit project description:</label>
        <textarea
          value={peoject_description}
          onChange={(e) => setProject(e.target.value)}
          rows='4'
          className='block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600'
        />

        <button
          onClick={updateProject}
          className='text-white px-4 py-2 rounded bg-blueSecondary mt-2'
        >
          Update Project
        </button>
     
      </div>
      </div>

      <h2 className='text-2xl font-bold'>Delete the Employee</h2>
      <button
        className='text-white px-4 py-2 rounded bg-blueSecondary mt-2'
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



