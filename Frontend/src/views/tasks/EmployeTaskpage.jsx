import React from 'react'
import { useEffect , useState } from 'react';
import { DashApi } from '../../components';

const EmployeTaskpage = () => {
    const id = localStorage.getItem("id");
    const [allTasks, Settaskdetails] = useState([]);
    const [error, setError] = useState([]);


    useEffect(() => {

        const taskdata = async ( event) =>{
            if (event){
                event.preventDefault()
            }
            try {

                const response = await DashApi.Employedetails(id);
                console.log(response);
                Settaskdetails(response.data.tasks)

                
            } catch (error) {
                console.log(err);
            if (err.response) {
              return setError(err.response.data.msg);
            }
            return setError('There has been an error.');
          
                
            }
        }
        taskdata();
        return setError("hello i am not availabel")
    }, []);
    













  return (
    <div>
      <div>
      {allTasks.length > 0 && (
          <table className='table-auto w-full'>
            <thead className='border-2'>
              <tr>
              <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Task Name</th>
              <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '> Name</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Project</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Board</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Task Description</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Task Assign Date</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Task Deadline Date</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>Task Update Date</th>
              </tr>
            </thead>
            <tbody className='border-2 '>
              {allTasks.map((task, index) => (
                <tr key={index} className='border-2 justify-center'>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.project_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.task_assign_date}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.project_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.board_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.task_desc}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.task_assign_date}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.task_deadline_date}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.task_update_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default EmployeTaskpage
