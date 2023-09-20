import React, { useState, useEffect } from "react";
import chatVideo from "../../../assets/chat.mp4";
import axios from "axios";
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
  const [userName, setUserName] = useState(localStorage.getItem("name"));
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);


  useEffect(() => {
    const localUserName = localStorage.getItem("name");
    setUserName(localUserName);

    if (localUserName) {
      loadChatMessages(localUserName);
    }
  }, []);

  useEffect(() => {
    const Employelist = async () => {
      try {
        const response = await axios.get(
          "https://sentinel.www.dianasentinel.com/api/users/alluser"
        );
        setEmployees(response.data);
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
  // ...

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredEmployees([]);
    } else {
      const filteredResults = employees.filter((employee) =>
        employee.username.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Filter out the currently logged-in user from the search results
      const filteredEmployeesWithoutCurrentUser = filteredResults.filter(
        (employee) => employee.username !== userName
      );

      setFilteredEmployees(filteredEmployeesWithoutCurrentUser);
    }
  }, [searchQuery, employees, userName]);

  // ...

  const loadChatMessages = async (userName) => {
    try {
      const senderDocRef = doc(db, "users", userName);
      const senderSubcollectionRef = collection(senderDocRef, "sentMessages");
      const receiverDocRef = doc(db, "users", userName);
      const receiverSubcollectionRef = collection(
        receiverDocRef,
        "receivedMessages"
      );

      const sentQuery = query(senderSubcollectionRef);
      const receivedQuery = query(receiverSubcollectionRef);

      const [sentSnapshot, receivedSnapshot] = await Promise.all([
        getDocs(sentQuery),
        getDocs(receivedQuery),
      ]);

      const sentChatData = [];
      const receivedChatData = [];

      sentSnapshot.forEach((doc) => {
        sentChatData.push(doc.data());
      });

      receivedSnapshot.forEach((doc) => {
        receivedChatData.push(doc.data());
      });

      const combinedChat = [...sentChatData, ...receivedChatData].sort((a, b) =>
        a.timestamp.localeCompare(b.timestamp)
      );

      setChatMessages(combinedChat);
    } catch (error) {
      console.error("Error loading chat messages:", error);
    }
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    loadChatMessages(employee.username);
  };

  const handleSendMessage = async () => {
    if (messageText.trim() === "") return;
  
    try {
      const receiverUsername = selectedEmployee.username;
  
      const senderDocRef = doc(db, "users", userName);
      const senderSubcollectionRef = collection(senderDocRef, "sentMessages");
      const senderMessage = {
        to: receiverUsername,
        content: messageText,
        timestamp: new Date().toISOString(),
      };
  
      // Add the message to Firestore for the sender
      await addDoc(senderSubcollectionRef, senderMessage);
  
      const receiverDocRef = doc(db, "users", receiverUsername);
      const receiverSubcollectionRef = collection(
        receiverDocRef,
        "receivedMessages"
      );
      const receiverMessage = {
        from: userName,
        content: messageText,
        timestamp: new Date().toISOString(),
      };
  
      // Add the message to Firestore for the receiver
      await addDoc(receiverSubcollectionRef, receiverMessage);
  
      // Update the chatMessages state with the new message
      setChatMessages([...chatMessages, senderMessage]);
  
      setMessageText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  ;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={chatVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 p-4 flex">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Employee"
            className="py-2 px-4  rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

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

        {selectedEmployee && (
          <div className="w-full bg-gray-50 bg-opacity-50 h-screen p-4">
            <div className="text-xl font-semibold mb-2">
              Chat with {selectedEmployee.username}
            </div>
            <div className="h-96 border border-gray-300 p-4 overflow-y-auto">
              {chatMessages.map((message, index) => (
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
                onClick={handleSendMessage}
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
