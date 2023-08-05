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

        if (response.data && response.data.success === 200) {
          return setError(" board updated succusfully");
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
    <div className='dark:bg-navy-800 bg-lightgray  h-full pb-[400px]'>
    <Navbar/>   

    <p className='dark:text-darktext justify-center flex mb-5 mt-5'>
      Board details
    </p>
    <Card extra='mx-2 '>
      <div className='py-4 h-[100px]'>
        <label className='text-sm ml-6 mt-2 dark:text-lightPrimary'>Edit Project Name:</label>
        <input
          type='text'
          value={board_name}
          onChange={(e) => setName(e.target.value)}
          className=' w-1/3   mx-4  px-4 py-2 mt-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:bg-lightgray dark:text-lightPrimary  dark:border-gray-600'
        />

        <button
          onClick={updateBoard}
          className=' py-2 px-2 mx-10  dark:text-darktext bg-green-700  text-lightPrimary rounded-md  '
        >
        <span className='py-4 pb-5 '>Update Project
</span>
        </button>
        <button className='btn w-20 h-20 bg-red-700 mx-12  text-lightPrimary dak:text-white' onClick={DeleteBoard}>
    delete

    </button>
      </div>
    </Card>

   
  <h1 className='text-navy-900 mt-3'> {error}</h1>
    
      
    </div>
  )
}

export default Boardpage


