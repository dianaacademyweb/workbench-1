import React ,{useState}from 'react'
import Top from './Top'


const TopActivity = () => {

        const [selectedTeam, setSelectedTeam] = useState('');
        const [startDate, setStartDate] = useState('');
        const [endDate, setEndDate] = useState('');
      
        const handleTeamChange = (event) => {
          setSelectedTeam(event.target.value);
        };
      
        const handleStartDateChange = (event) => {
          setStartDate(event.target.value);
        };
      
        const handleEndDateChange = (event) => {
          setEndDate(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Perform any necessary actions with the selected team, start date, and end date
          console.log('Selected Team:', selectedTeam);
          console.log('Start Date:', startDate);
          console.log('End Date:', endDate);
        };
      
  return (
    <div>
        <Top/>
        <div className='flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border'>
        <h1 className='text-2xl py-6 px-4 text-black  dark:text-white dark:bg-navy-900 rounded-3xl'>TOP ACTIVITY</h1>
        </div>
    <div className='bg-white m-4 min-h-screen  rounded-3xl dark:text-white dark:bg-navy-900'>
    <form onSubmit={handleSubmit} className="p-4 sm:flex  gap-8">
      <label className="block mb-2 dark:text-white dark:bg-navy-900">
        Choose a Team *
        <select
          value={selectedTeam}
          onChange={handleTeamChange}
          className="block md:w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:bg-navy-900"
        >
          <option value="">-- Select Team --</option>
          <option value="team1">Diana advanced tech academy</option>
          <option value="team2">Team 2</option>
          <option value="team3">Team 3</option>
        </select>
      </label>

      <label className="block mb-2 dark:text-white dark:bg-navy-900">
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="block md:w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:bg-navy-900"
        />
      </label>

      <label className="block mb-2 dark:text-white dark:bg-navy-900">
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="block md:w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:bg-navy-900"
        />
        
      </label>

      <button
        type="submit"
        className="px-6 py-1  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
    <div className='min-h-screen bg-lightPrimary m-4 rounded-3xl shadow-2xl dark:text-white dark:bg-navy-800'>

    </div>

    </div>
    </div>
  )
}

export default TopActivity