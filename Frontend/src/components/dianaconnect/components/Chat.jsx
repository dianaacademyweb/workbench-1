import React, { useEffect } from "react";

const Chat = ({ channel, messages, message, setMessage, handleSendMessage }) => {
  // Scroll to the bottom of the chat when new messages arrive
  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-gray-200  p-4 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-2">Chat here!</h3>
      <div id="chat-container" className="mb-4" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}:</strong> {msg.text} 
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border rounded-l p-2 w-full"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          className="bg-purple-600 px-4 py-2 rounded-r text-lightPrimary hover:bg-purple-700"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
