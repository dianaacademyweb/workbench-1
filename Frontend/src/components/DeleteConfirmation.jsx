import React from 'react';

const DeleteConfirmation = ({ show, onCancel, onConfirm }) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4 text-navy-800">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={onConfirm}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmation;
