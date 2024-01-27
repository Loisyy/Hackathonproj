// pages/multimodal-server.tsx
import React from "react";

const MultiModalServer: React.FC = () => {
  let messages: any[] = [];

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Text Communication Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Text Communication</h2>
        <div className="flex flex-col h-48 overflow-y-auto border border-gray-300 p-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "text-right" : "text-left"}
            >
              <span className="bg-blue-500 text-white p-2 rounded-md inline-block mb-2">
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          {/* Input field and button, but no event handlers */}
          <input
            type="text"
            className="p-2 border border-gray-300 rounded flex-1"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default MultiModalServer;
