import React , {useState , useEffect} from 'react'
import Navbar from '../../components/navbar/index'
import { useParams } from 'react-router-dom';
import DashApi from '../../dashboard/auth';
import { useNavigate } from "react-router-dom";
import Card from '../../components/card';




const Teamspage = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState([]);



  const { id } = useParams();


    useEffect(() => {
    const Employedata = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employedata(id);
        console.log(response)
        setEmployees(response.data.tasks);

        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          return setError(err.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employedata(); // Call the function here
  }, []);
return (
    <div>
    <Navbar/>   

    <p>
      Employes working on this teams
    </p>
    <Card extra="  mx-4">
      <div className=''>
        {employees.length > 0 && (
          <table className='table-auto w-full'>
            <thead className='border-2'>
              <tr>
              <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>id</th>
              <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '> username</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>password</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>email</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>gender</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>contact</th>
              </tr>
            </thead>
            <tbody className='border-2 '>
              {employees.map((task, index) => (
                <tr key={index} className='border-2 justify-center'>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.id}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.username}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.password}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.email}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.gender}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </Card>

    delete the employe

    <button className='btn w-20 h-20 bg-navy-800 flex justify-center  text-white' >
    delete

    </button>
    {error}
    
      
    </div>
  )
}

export default Teamspage


