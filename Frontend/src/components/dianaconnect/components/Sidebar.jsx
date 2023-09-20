import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faHashtag,
  faComments,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { Link } from "react-router-dom";
const Sidebar = ({
  selectedItem,
  channels,
  handleSidebarItemClick,
  toggleChannelForm,
  handleChannelSelect,
  db,
  setChannels, // Add setChannels prop here
}) => {
  const [newChannelName, setNewChannelName] = React.useState("");
  const [isCreatingChannel, setIsCreatingChannel] = React.useState(false);

  const handleCreateChannel = async () => {
    if (newChannelName.trim() === "") return;

    try {
      const channelsRef = collection(db, "channels");
      const newChannelDocRef = await addDoc(channelsRef, {
        name: newChannelName,
      });

      // Create a subcollection for messages under the new channel document
      const messagesRef = collection(
        db,
        "channels",
        newChannelDocRef.id,
        "messages"
      );

      // Update the channels state with the new channel
      setChannels([
        ...channels,
        { id: newChannelDocRef.id, name: newChannelName },
      ]);
      setNewChannelName("");
      setIsCreatingChannel(false); // Close the form after creating the channel
    } catch (error) {
      console.error("Error creating channel:", error);
    }
  };


  return (
    <div className="w-1/4 sm:w-1/5 bg-purple-800 text-lightPrimary">
      <div className="sm:p-4">
        {/* <h1 className="sm:text-2xl  sm:text-lightPrimary font-semibold mb-4">DianaConnect</h1> */}
        <ul className="space-y-2 py-5">
          <Link to="/dianaconnect">
            <li
              className={`px-1 hover:text-[17px] items-center flex flex-col sm:flex-row sm:px-4 py-2 rounded-3xl cursor-pointer ${
                selectedItem === "Home"
                  ? "bg-purple-600"
                  : "hover:bg-purple-600"
              }`}
              onClick={() => handleSidebarItemClick("Home")}
            >
              <FontAwesomeIcon icon={faHome} className="sm:mr-2" />
              Home
            </li>
          </Link>
          <li
            className={`px-1 hover:text-[17px]  items-center flex flex-col sm:flex-row sm:px-4 py-2 rounded-3xl cursor-pointer ${
              selectedItem === "Messages"
                ? "bg-purple-600"
                : "hover:bg-purple-600"
            }`}
            onClick={() => handleSidebarItemClick("Messages")}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Messages
          </li>
          <li
            className={`px-1 hover:text-[17px]  items-center flex flex-col sm:flex-row sm:px-4 py-2 rounded-3xl cursor-pointer ${
              selectedItem === "Channels"
                ? "bg-purple-600"
                : "hover:bg-purple-600"
            }`}
            onClick={() => handleSidebarItemClick("Channels")}
          >
            <FontAwesomeIcon icon={faHashtag} className="mr-2" />
            Channels
            <button
              className="bg-purple-600 text-white px-2  py-1 ml-2 rounded hover:bg-purple-700"
              onClick={() => setIsCreatingChannel(!isCreatingChannel)} // Toggle the form
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>

          {channels.map((channel) => (
            <li
              key={channel.id}
              className={`text-center hover:text-[17px]  items-center flex flex-col sm:flex-row sm:px-4 px-2 sm:ml-6 py-2 rounded-3xl cursor-pointer ${
                selectedItem === (channel?.name || "")
                  ? "bg-purple-600"
                  : "hover:bg-purple-600"
              }`}
              onClick={() => handleChannelSelect(channel)}
            >
              {channel?.name || ""}
            </li>
          ))}

          <li
            className={`px-4 hover:text-[17px]  py-2 rounded-3xl cursor-pointer ${
              selectedItem === "Chats" ? "bg-purple-600" : "hover:bg-purple-600"
            }`}
        // Handle "Chats" menu item click
          >
           <Link to="/chat"><FontAwesomeIcon icon={faComments} className="mr-2" />{" "}
            {/* Add the chat icon */}
            Chats
            </Link> 
          </li>
     
          {/* ... other menu items ... */}
        </ul>
      </div>
      {isCreatingChannel && (
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
                onClick={() => setIsCreatingChannel(false)} // Close the form
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
      )}
    </div>
  );
};

export default Sidebar;
