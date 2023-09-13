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
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const Chatting = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(localStorage.getItem("name")); // Retrieve the sender's name from local storage
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [sentChat, setSentChat] = useState([]); // Store sent chat messages
  const [receivedChat, setReceivedChat] = useState([]); // Store received chat messages
  const type = localStorage.getItem("type"); // Retrieve the user type
  const [receiver, setReceiver]=useState("")
  // ...

  useEffect(() => {
    // Retrieve the sender's name from local storage
    const localUserName = localStorage.getItem("name");
    setUserName(localUserName);

    // Load received chat messages when the component mounts
    if (localUserName) {
      loadReceivedChatMessages(localUserName);
    }
  }, []);

  // ...

  useEffect(() => {
    const Employelist = async () => {
      try {
        const response = await DashApi.Employelist();
        setEmployees(response.data.employes);

        if (response.data && response.data.success === true) {
          setError(response.data.msg);
        }
      } catch (error) {
        if (error.response) {
          setError(error.response.data.msg);
        } else {
          setError("There has been an error.");
        }
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

  // Handle click on employee name to open chat box
  const handleEmployeeClick = (employee) => {
    // Set the selected employee for chat
    setSelectedEmployee(employee);

    // Load sent and received chat messages for the selected employee
    loadSentChatMessages(employee.username);
    loadReceivedChatMessages(employee.username);
  };

  // Load sent chat messages for a specific user from Firestore
  const loadSentChatMessages = async (selectedUsername) => {
    try {
      const senderDocRef = doc(db, "users", userName);
      const senderSubcollectionRef = collection(senderDocRef, "sentMessages");
      const q = query(
        senderSubcollectionRef,
        where("to", "==", selectedUsername)
      );
      const querySnapshot = await getDocs(q);

      const sentChatData = [];

      querySnapshot.forEach((doc) => {
        sentChatData.push(doc.data());
      });

      // Update the sentChat state with sent chat messages
      setSentChat(sentChatData);
    } catch (error) {
      console.error("Error loading sent chat messages:", error);
    }
  };

  // Load received chat messages for a specific user from Firestore
  // ...

  // Load received chat messages for a specific user from Firestore

  // Load received chat messages for a specific user from Firestore
  // Load received chat messages for a specific user from Firestore
  const loadReceivedChatMessages = async (userName) => {
    try {
      // Get the reference to the user's document matching the selected username
      const userDocRef = doc(db, "users", userName);
      const receivedSubcollectionRef = collection(
        userDocRef,
        "receivedMessages"
      );
      const q = query(receivedSubcollectionRef);
      const querySnapshot = await getDocs(q);

      const receivedChatData = [];

      querySnapshot.forEach((doc) => {
        receivedChatData.push(doc.data());
      });

      // Update the receivedChat state with received chat messages
      setReceivedChat(receivedChatData);
      
      console.log("Received Chat Data:", receivedChatData);
      setReceiver(receivedChat[0].from)
      console.log(receiver)
    } catch (error) {
      console.error("Error loading received chat messages:", error);
    }
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (messageText.trim() === "") return;

    try {
      const receiverUsername = selectedEmployee.username;

      // Create a new message document in Firestore for the sender
      const senderDocRef = doc(db, "users", userName);
      const senderSubcollectionRef = collection(senderDocRef, "sentMessages");
      await addDoc(senderSubcollectionRef, {
        to: receiverUsername, // Receiver's username
        content: messageText, // Message content
        timestamp: new Date().toISOString(),
      });

      // Create a new message document in Firestore for the receiver
      const receiverDocRef = doc(db, "users", receiverUsername);
      const receiverSubcollectionRef = collection(
        receiverDocRef,
        "receivedMessages"
      );
      await addDoc(receiverSubcollectionRef, {
        from: userName, // Sender's username
        content: messageText, // Message content
        timestamp: new Date().toISOString(),
      });

      // Add the sent message to the local state for immediate display
      const newMessage = {
        from: userName,
        to: receiverUsername,
        content: messageText,
        timestamp: new Date().toISOString(),
      };

      // Update the chatMessages state with the new message
      setSentChat([...sentChat, newMessage]);
      setMessageText(""); // Clear the message text input
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const handleMessage = async (receiver) => {
    if (messageText.trim() === "") return;

    try {
      const receiverUsername = receiver ;
      console.log(receiverUsername)
      // Create a new message document in Firestore for the sender
      const senderDocRef = doc(db, "users", userName);
      const senderSubcollectionRef = collection(senderDocRef, "sentMessages");
      await addDoc(senderSubcollectionRef, {
        to: receiverUsername, // Receiver's username
        content: messageText, // Message content
        timestamp: new Date().toISOString(),
      });

      // Create a new message document in Firestore for the receiver
      const receiverDocRef = doc(db, "users", receiverUsername);
      const receiverSubcollectionRef = collection(
        receiverDocRef,
        "receivedMessages"
      );
      await addDoc(receiverSubcollectionRef, {
        from: userName, // Sender's username
        content: messageText, // Message content
        timestamp: new Date().toISOString(),
      });

      // Add the sent message to the local state for immediate display
      const newMessage = {
        from: userName,
        to: receiverUsername,
        content: messageText,
        timestamp: new Date().toISOString(),
      };

      // Update the chatMessages state with the new message
      setSentChat([...sentChat, newMessage]);
      setMessageText(""); // Clear the message text input
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  
  const combinedChat = [...sentChat, ...receivedChat].sort(
    (a, b) => a.timestamp.localeCompare(b.timestamp)
  );
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
      </video>

      {/* Content */}
      <div className="relative z-10 p-4 flex">
      
        <div className="relative flex-1">
          {type === "organization" && (
            <input
              type="text"
              placeholder="Search Employee"
              className="py-2 px-4  rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          <div className="p-3 w-1/4">
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

        {/* Right-side chat box */}
        {selectedEmployee && (
          <div className="w-full bg-gray-50 bg-opacity-50 h-screen p-4">
            <div className="text-xl font-semibold mb-2">
              Chat with {selectedEmployee.username}
            </div>
            <div className="h-96 border border-gray-300 p-4 overflow-y-auto">
              {/* Display sent chat messages */}
            
              {combinedChat.map((message, index) => (
                <div key={index} className="mb-2">
                  <strong>{message.from}:</strong> {message.content}
                </div>
              ))}
            
              {/* Display received chat messages */}
              
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button
                className="bg-blue-500 text-lightPrimary px-4 py-2  rounded-full hover:bg-blue-600"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        )}
        {type==="employe" && (
          <div className="w-full bg-gray-50 bg-opacity-50 h-screen p-4">
            <div className="text-xl font-semibold mb-2">
              Chat with {receiver}
            </div>
            <div className="h-96 border border-gray-300 p-4 overflow-y-auto">
             
              

            {combinedChat.map((message, index) => (
                <div key={index} className="mb-2">
                  <strong>{message.from}:</strong> {message.content}
                </div>
              ))}
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button
                className="bg-blue-500 text-lightPrimary px-4 py-2  rounded-full hover:bg-blue-600"
                onClick={() => handleMessage(receiver)} 
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatting;
