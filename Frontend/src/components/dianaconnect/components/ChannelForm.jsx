import React from "react";

const ChannelForm = ({
  newChannelName,
  isCreatingChannel,
  isBackdropVisible,
  setNewChannelName,
  handleCreateChannel,
  toggleChannelForm,
}) => {
  return isBackdropVisible ? (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="bg-lightPrimary p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-2">Create Channel</h3>
        <input
          type="text"
          className="border rounded text-navy-800 p-2 mb-2 w-full"
          placeholder="New Channel"
          value={newChannelName}
          onChange={(e) => setNewChannelName(e.target.value)}
        />
        <div className="flex gap-2 justify-end">
          <button
            className="text-red-600 hover:text-red-800"
            onClick={toggleChannelForm}
          >
            Close
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={handleCreateChannel}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChannelForm;
