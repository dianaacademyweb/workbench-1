import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, query, orderBy, getDocs } from "firebase/firestore";
import Chat from "./Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faHashtag,
  
} from "@fortawesome/free-solid-svg-icons";
import ch from "../../../assets/Images/layouts/channel.png"
import QuoteSlider from "./QuoteSlider";
const ChannelContent = ({ channel, userName, db }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      
      try {
        const messagesRef = collection(db, "channels", channel.id, "messages");
        const messagesQuery = query(messagesRef, orderBy("timestamp"));
        const querySnapshot = await getDocs(messagesQuery);
        const messagesData = querySnapshot.docs.map((doc) => doc.data());
        setMessages(messagesData);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [db, channel]);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
  
    try {
      // Add the new message to Firestore
      const messagesRef = collection(db, "channels", channel.id, "messages");
      await addDoc(messagesRef, {
        text: message,
        sender: userName,
        timestamp: serverTimestamp(),
      });
  
      // Update the messages state to include the new message
      const newMessage = {
        text: message,
        sender: userName,
        timestamp: { seconds: Date.now() / 1000 }, // Use the current timestamp
      };
      setMessages([...messages, newMessage]);
  
      setMessage(""); // Clear the message input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  

  return (
    <div className="w-full bg-LightPrimary bg-cover p-4 min-h-screen flex flex-col" style={{
      backgroundImage: `url(${ch})`,
    }}>
   
      <div className="flex-1 mt-2 mb-2">
        <h2 className="sm:text-2xl mb-2 text-lightPrimary uppercase font-semibold"><FontAwesomeIcon icon={faHashtag} className="mr-2" />{channel.name}</h2>
        {/* Add any additional channel information or styling here */}
        <QuoteSlider/>
      </div>
      
      <div className=" overflow-y-auto" >
        <Chat
          channel={channel}
          messages={messages}
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChannelContent;
