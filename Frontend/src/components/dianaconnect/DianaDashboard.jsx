import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "./components/Sidebar";
import ChannelContent from "./components/ChannelContent";
import Chat from "./components/Chat"; // Import your chat component
import bg from "../../assets/Images/layouts/connect.png";

import "./animate.css";



const DianaDashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [userName] = useState(localStorage.getItem("name"));
  const [isTypingAnimationFinished, setIsTypingAnimationFinished] = useState(
    false
  );
  const [searchQuery, setSearchQuery] = useState("");

// State to track the selected employee for chat
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
 
  useEffect(() => {
    // Simulate the typing animation by setting a delay
    const typingAnimationTimeout = setTimeout(() => {
      setIsTypingAnimationFinished(true);
    }, 4000); // Adjust the timeout duration to match the animation duration

    // Clear the timeout when the component unmounts
    return () => clearTimeout(typingAnimationTimeout);
  }, []);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const channelsRef = collection(db, "channels");
        const querySnapshot = await getDocs(channelsRef);
        const channelsData = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();
            if (data && data.name) {
              return {
                id: doc.id,
                name: data.name,
              };
            }
            return null;
          })
          .filter(Boolean);

        setChannels(channelsData);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, []);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
  };

  const toggleChannelForm = () => {
    setIsCreatingChannel(!isCreatingChannel);
  };


  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  let dashboardContent;
  if (selectedItem === "Home") {
    dashboardContent = (
      <div
        className="w-full bg-LightPrimary p-4 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="flex right-0">
          
          
        </div>
        <div>
          {searchQuery === "" ? (
            // Render your content when searchQuery is empty
            <div className=" text-lightPrimary flex flex-col justify-center items-center text-center">
              <div className="backdrop-blur-sm rounded-xl">
                <h2 className="sm:text-5xl typing-animation font-extrabold mb-2 ">
                  Welcome to Diana Connect!
                </h2>
                <h2 className="sm:text-3xl typing-animation font-semibold mb-4  ">
                  Welcome, {userName}!
                </h2>
              </div>
            </div>
          ) : (
            // Render filtered employees when searchQuery is not empty
            <div className="text-lightPrimary  rounded-2xl p-2">

            </div>
          )}
        </div>
      </div>
    );
 
  } else {
    dashboardContent = selectedChannel ? (
      <ChannelContent channel={selectedChannel} userName={userName} db={db} />
    ) : (
      <div className="w-full bg-LightPrimary p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Please select a channel from the sidebar.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
       
      
      <Sidebar
        selectedItem={selectedItem}
        channels={channels}
        handleSidebarItemClick={handleSidebarItemClick}
        toggleChannelForm={toggleChannelForm}
        handleChannelSelect={handleChannelSelect}
        db={db}
        setChannels={setChannels}
      />
      {dashboardContent}
    </div>
  );
};

export default DianaDashboard;
