import React , {useState , useEffect} from 'react'
import Navbar from '../../components/navbar/index'
import { useParams } from 'react-router-dom';
import DashApi from '../../dashboard/auth';
import { useNavigate } from "react-router-dom";
import Card from '../../components/card';




const Boardpage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [boardId, setboardId] = useState(null); // To store the fetched project ID
  const [orgnisation_id, setOrgnization] = localStorage.getItem("id");

  const [board_name, setName] = useState('');
  const { id } = useParams();
  useEffect(() => {
    const boardsdata = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.getboard(id);
        console.log(response);
        setboardId(response.data.id)
        setName(response.data.board_name)

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

    boardsdata();
  }, []);
  const updateBoard = async (e) => {
    if (e){
      e.preventDefault();
    }
    try {
      let response = await DashApi.updateBoard( boardId,  {
        board_name,
        orgnisation_id,
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



    const DeleteBoard= async () => {
      try {
        let response = await DashApi.deleteboard(id);
        console.log(response);
        setError("employe deleted succesfully")
        return navigate("/board/allboard")
      } catch (error) {
        setError("error in deleting the employe")
        console.error("Error in deleting the employe", error);
      }
    }; 

  return (
    <div>
    <Navbar/>   

    <p>
      Employes details
    </p>
    <Card extra='mx-4'>
      <div>
        <label className='text-lg font-semibold'>Edit Project Name:</label>
        <input
          type='text'
          value={board_name}
          onChange={(e) => setName(e.target.value)}
          className='block w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600'
        />

    

        <button
          onClick={updateBoard}
          className='btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
        >
          Update Project
        </button>
      </div>
    </Card>

    delete the Board

    <button className='btn w-20 h-20 bg-navy-800 flex justify-center  text-white' onClick={DeleteBoard}>
    delete

    </button>
    {error}
    
      
    </div>
  )
}

export default Boardpage


