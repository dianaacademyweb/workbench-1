import React, { useState } from 'react';
import SetTop from './SetTop';

const Timezone = () => {
  const [country, setCountry] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [timeZoneHistory, setTimeZoneHistory] = useState([]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleTimeZoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  const handleTimeZoneUpdate = () => {
    const newHistory = [...timeZoneHistory];
    const newTimeZone = { id: newHistory.length + 1, oldTimeZone: timeZone, newTimeZone: timeZone, updatedAt: new Date() };
    newHistory.unshift(newTimeZone);
    setTimeZoneHistory(newHistory);
    setTimeZone('');
  };

  return (
    <div>
        <SetTop/>
        <div className="flex mx-4 my-4 rounded-3xl justify-between bg-white dark:bg-navy-900 dark:border-white dark:border">
        <h1 className="text-2xl py-6 px-4 text-lightPrimary dark:bg-navy-900 rounded-3xl">
          TIMEZONE CUSTOMIZATION
        </h1>
        
      </div>
      <div className='bg-white m-4 min-h-screen rounded-3xl dark:bg-navy-800'>
    <div className="p-4 flex flex-col text-lightPrimary  space-y-4">
      <div>
        <h2 className="text-xl font-bold">Organization Time Zone</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="country" className="font-semibold">Country Selection:</label>
          <input type="text" id="country" className="border border-gray-300 px-2 py-1" value={country} onChange={handleCountryChange} />
          <label htmlFor="timeZone" className="font-semibold">Time Zone Selection:</label>
          <input type="text" id="timeZone" className="border border-gray-300 px-2 py-1" value={timeZone} onChange={handleTimeZoneChange} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleTimeZoneUpdate}>Update</button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Time Zone History</h2>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className='border-b font-medium dark:border-neutral-500'>
            <tr>
              <th className=" border-gray-300 px-4 py-2">ID</th>
              <th className=" border-gray-300 px-4 py-2">Old Time Zone</th>
              <th className=" border-gray-300 px-4 py-2">New Time Zone</th>
              <th className=" border-gray-300 px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {timeZoneHistory.map((history) => (
              <tr key={history.id}>
                <td className=" border-gray-300 px-4 py-2">{history.id}</td>
                <td className= "border-gray-300 px-4 py-2">{history.oldTimeZone}</td>
                <td className=" border-gray-300 px-4 py-2">{history.newTimeZone}</td>
                <td className=" border-gray-300 px-4 py-2">{history.updatedAt.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Timezone;
