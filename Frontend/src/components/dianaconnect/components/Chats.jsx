import React, { useState, useEffect } from "react";
import chatVideo from "../../../assets/chat.mp4";
import DashApi from "../../../dashboard/auth";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const Chats = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [openChats, setOpenChats] = useState([]); // Maintain a list of open chat boxes
  const [error, setError] = useState(undefined);
  const [messageText, setMessageText] = useState("");
  const [userName] = useState(localStorage.getItem("name"));

  useEffect(() => {
    const Employelist = async (event) => {
      if (event) {
        event.preventDefault();
      }
      try {
        let response = await DashApi.Employelist();
        setEmployees(response.data.employes);

        if (response.data && response.data.success === true) {
          return setError(response.data.msg);
        }
      } catch (error) {
        if (error.response) {
          return setError(error.response.data.msg);
        }
        return setError("There has been an error.");
      }
    };

    Employelist();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredEmployees([]); // Clear filtered employees when no query
    } else {
      const filteredResults = employees.filter((employee) =>
        employee.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEmployees(filteredResults);
    }
  }, [searchQuery, employees]);

  // Handle click on employee name to open a new chat box
  const handleEmployeeClick = (employee) => {
    // Check if a chat box for this employee is already open
    const chatExists = openChats.find((chat) => chat.employee.id === employee.id);

    // If chat doesn't exist, create a new chat box
    if (!chatExists) {
      const newChat = {
        employee: employee,
        messages: [],
      };
      setOpenChats([...openChats, newChat]);
    }
  };

  // Load all chat messages for a specific user
  const loadAllChatMessages = async (chat) => {
    const { employee } = chat;
    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      orderBy("timestamp"), // Assuming you have a timestamp field for messages
      where("from", "in", [userName, employee.username]), // Filter messages sent by the logged-in user and the selected user
      where("to", "in", [userName, employee.username]) // Filter messages sent to the logged-in user and the selected user
    );

    const querySnapshot = await getDocs(q);
    const messagesData = [];

    querySnapshot.forEach((doc) => {
      messagesData.push(doc.data());
    });

    // Sort the messages by timestamp to display them in chronological order
    messagesData.sort((a, b) => a.timestamp - b.timestamp);

    // Update the messages in the chat box
    chat.messages = messagesData;
    setOpenChats([...openChats]); // Update the state to trigger re-render
  };

  // Handle sending a message in a specific chat
  const handleSendMessage = async (chat) => {
    if (messageText.trim() === "") return;

    const { employee } = chat;

    // Create a new message document in Firestore
    try {
      const messagesRef = collection(db, "messages");
      const newMessageDocRef = await addDoc(messagesRef, {
        from: userName,
        to: employee.username,
        messageText: messageText,
        timestamp: new Date().toISOString(),
      });

      // Add the sent message to the local state for immediate display
      const newMessage = {
        from: userName,
        to: employee.username,
        messageText: messageText,
        timestamp: new Date().toISOString(),
      };

      chat.messages.push(newMessage);
      setOpenChats([...openChats]); // Update the state to trigger re-render
      setMessageText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={chatVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Employee"
            className="py-2 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="p-3">
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              onClick={() => handleEmployeeClick(employee)}
              className="cursor-pointer hover:text-xl text-lg"
            >
              {employee.username}
            </div>
          ))}
        </div>
      </div>

      {/* Chatbox */}
      {openChats.map((chat, index) => (
        <div
          key={index}
          className="absolute bottom-0 left-0 right-0 bg-lightPrimary p-4"
        >
          <h2 className="text-xl font-semibold mb-2">
            Chat with {chat.employee.username}
          </h2>
          <div className="mt-4">
            {/* Display chat messages here */}
            {chat.messages.map((message, messageIndex) => (
              <div key={messageIndex} className="mb-2">
                <strong>{message.from}:</strong> {message.messageText}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-full hover:bg-blue-600"
              onClick={() => handleSendMessage(chat)}
            >
              Send
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
