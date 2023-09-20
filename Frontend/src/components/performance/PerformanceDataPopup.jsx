import React from 'react';

const PerformanceDataPopup = ({ quarterData, onClose }) => {
  return (
    <div className="bg-opacity-75 fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Data</h2>
        <table className="table-auto">
          
          <tbody>
            {Object.entries(quarterData).map(([key, value]) => (
              <tr key={key}>
                <td className="border font-semibold px-4 py-2">{key}</td>
                <td className="border px-4 py-2">{JSON.stringify(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDataPopup;
