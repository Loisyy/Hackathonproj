// pages/multimodal-client.tsx
import React from "react";

const MultiModalClient: React.FC = () => {
  let messageInput = "";
  let isVideoEnabled = false;
  let isAudioEnabled = false;

  const handleSendMessage = () => {
    // Your message sending logic here
  };

  const handleToggleVideo = () => {
    // Your video toggle logic here
  };

  const handleToggleAudio = () => {
    // Your audio toggle logic here
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Voice and Video Calls Section */}
      <section className="flex space-x-4">
        <button
          onClick={handleToggleAudio}
          className={`bg-blue-500 text-white p-2 rounded-md flex-1 ${
            isAudioEnabled
              ? "hover:bg-blue-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isAudioEnabled}
        >
          {isAudioEnabled ? "Disable Audio" : "Audio Disabled"}
        </button>
        <button
          onClick={handleToggleVideo}
          className={`bg-blue-500 text-white p-2 rounded-md flex-1 ${
            isVideoEnabled
              ? "hover:bg-blue-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isVideoEnabled}
        >
          {isVideoEnabled ? "Disable Video" : "Video Disabled"}
        </button>
      </section>
    </div>
  );
};

export default MultiModalClient;
