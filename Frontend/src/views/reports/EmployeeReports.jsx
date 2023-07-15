import React,{useState} from 'react'
import Top from './Top'
// import EmployeesDropdown from './EmployeesDropdown'; // Assume this file provides employee data
import { format, addMonths, subMonths, startOfWeek, addDays, subDays, getDay } from 'date-fns';
const EmployeeReports = () => { 
    const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedItem, setSelectedItem] = useState('');
  
  
    const employees = [
      { id: 1, name: 'Employee 1' },
      { id: 2, name: 'Employee 2' },
      { id: 3, name: 'Employee 3' },
    ];
  
    const handlePrevEmployee = () => {
      setSelectedEmployeeIndex((prevIndex) => (prevIndex - 1 + employees.length) % employees.length);
    };
  
    const handleNextEmployee = () => {
      setSelectedEmployeeIndex((prevIndex) => (prevIndex + 1) % employees.length);
    };
  
    const handlePrevMonth = () => {
      setSelectedMonth((prevMonth) => subMonths(prevMonth, 1));
    };
  
    const handleNextMonth = () => {
      setSelectedMonth((prevMonth) => addMonths(prevMonth, 1));
    };
  
    const getDatesOfMonth = () => {
      const startOfMonth = startOfWeek(selectedMonth);
      const dates = [];
      for (let i = 0; i < 7; i++) {
        dates.push(addDays(startOfMonth, i));
      }
      return dates;
    };
    const handlePrevWeek = () => {
        setSelectedDate(subDays(selectedDate, 7));
      };
    
      const handleNextWeek = () => {
        setSelectedDate(addDays(selectedDate, 7));
      };
    
      const getWeekDates = () => {
        const startOfWeekDate = startOfWeek(selectedDate);
        const dates = [];
        for (let i = 0; i < 7; i++) {
          dates.push(addDays(startOfWeekDate, i));
        }
        return dates;
      };
  return (
    <div>
        <Top/>
        <div className='flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border'>
            <h1 className='text-2xl py-6 px-4 text-black  dark:text-white dark:bg-navy-900 rounded-3xl'>EMPLOYEE REPORTS</h1>
        </div>
        <div className="flex  gap-4 p-4">
      <div className="box bg-white rounded-3xl w-1/3">
        <div className="flex items-center justify-between bg-gray-100 p-4">
          <button
            onClick={handlePrevEmployee}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {'<'}
          </button>
          <span className="font-semibold">{employees[selectedEmployeeIndex].name}</span>
          <button
            onClick={handleNextEmployee}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {'>'}
          </button>
        </div>
      </div>

      <div className="box bg-white rounded-3xl w-1/3">
        <div className="flex items-center justify-between bg-gray-100 p-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {'<'}
          </button>
          <div>{format(selectedMonth, 'MMMM yyyy')}</div>
          <button
            onClick={handleNextMonth}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {'>'}
          </button>
        </div>
      </div>

      <div className="box bg-white rounded-3xl w-1/3">
      <div className="flex items-center justify-between bg-gray-100 p-4">
          
          <div className="flex items-center">
            <button
              onClick={handlePrevWeek}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {'<'}
            </button>
            <div className="flex gap-2">
            {getWeekDates().map((date, index) => (
              <div key={index}>
                {format(date, 'dd/MM')}
                <div className="text-xs">{format(date, 'eee')}</div>
              </div>
            ))}
          </div>
            <button
              onClick={handleNextWeek}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-white min-h-screen rounded-3xl m-4'>
      <div>
        <ul className='flex justify-between m-6 text-xl pt-4'>
          <li>
            <a
              href=''
              className={`${
                selectedItem === 'screens'
                  ? 'underline text-blue-500'
                  : 'text-black'
              }`}
              onClick={() => setSelectedItem('screens')}
            >
              SCREENS
            </a>
          </li>
          <li>
            <a
              href=''
              className={`${
                selectedItem === 'tasks'
                  ? 'underline text-blue-500'
                  : 'text-black'
              }`}
              onClick={() => setSelectedItem('tasks')}
            >
              TASKS
            </a>
          </li>
          <li>
            <a
              href=''
              className={`${
                selectedItem === 'analysis'
                  ? 'underline text-blue-500'
                  : 'text-black'
              }`}
              onClick={() => setSelectedItem('analysis')}
            >
              ANALYSIS
            </a>
          </li>
          <li>
            <a
              href=''
              className={`${
                selectedItem === 'monitoring'
                  ? 'underline text-blue-500'
                  : 'text-black'
              }`}
              onClick={() => setSelectedItem('monitoring')}
            >
              MONITORING ACTIONS
            </a>
          </li>
          <li>
            <a
              href=''
              className={`${
                selectedItem === 'breaks'
                  ? 'underline text-blue-500'
                  : 'text-black'
              }`}
              onClick={() => setSelectedItem('breaks')}
            >
              BREAKS & MEETINGS
            </a>
          </li>
        </ul>
        <hr className='m-6' />
      </div>
    </div>
    </div>
    
 
  )
}

export default EmployeeReports