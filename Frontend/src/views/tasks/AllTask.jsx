import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import DashApi from '../../dashboard/auth';
import Card from "../../components/card/index";

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
      <Card extra="pb-7 p-[20px] mt-5 mx-4">
      <div className='py-56'>
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
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.task_name}</td>
                  <td className='border-2 py-2 px-2 justify-center bg-navy-800   text-white '>{task.employee_name}</td>
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
      </Card>
  );
}

export default AllTask;