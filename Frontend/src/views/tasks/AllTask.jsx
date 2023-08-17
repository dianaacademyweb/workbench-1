import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import DashApi from '../../dashboard/auth';
import Card from "../../components/card/index";
import TaskBox from './TasksBox';

function AllTask() {
  const [error, setError] = useState(undefined);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await DashApi.Taskdetails({});
        setAllTasks(response.data.tasks);
        console.log(response.data.tasks)
        if (response.data && response.data.success === false) {
          setError(response.data.msg);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          setError(err.response.data.msg);
        } else {
          setError('There has been an error.');
        }
      }
    };

    fetchTasks();
  }, []);

  return (

    <div>
      {/* <div className='flex gap-4 m-4 '>
      <div className='box w-1/3 bg-white rounded-3xl'>
        <h1>CLIENTS</h1>
      </div>
      <div className='box w-1/3 bg-white rounded-3xl'>
        <h1>PROJECTS</h1>     
      </div>
      <div className='box w-1/3 bg-white rounded-3xl'>
        <h1>TASKS</h1>
      </div> */}
      {/* </div> */}
      <TaskBox/>
      <Card extra="pb-7 p-[20px] mt-5 mx-4">
      <div className='py-56'>
        {allTasks.length > 0 && (
          <table className='table-auto w-full'>
            <thead className='border-2'>
              <tr>
              <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Task Name</th>
              <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '> Name</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Project</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Board</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Task Description</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Task Assign Date</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Task Deadline Date</th>
                <th className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>Task Update Date</th>
              </tr>
            </thead>
            <tbody className='border-2 '>
              {allTasks.map((task, index) => (
                <tr key={index} className='border-2 justify-center'>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.task_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.employee_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.project_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.board_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.task_desc}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.task_assign_date}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.task_deadline_date}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-lightPrimary '>{task.task_update_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </Card>
      </div>
  );
}

export default AllTask;
