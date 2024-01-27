// components/CommunityEngagement.tsx
import React from "react";

interface CommunityEngagementProps {
  onThreadCreation: (threadTitle: string, category: string) => void;
  onChannelCreation: (channelName: string, topic: string) => void;
}

const CommunityEngagement: React.FC<CommunityEngagementProps> = ({
  onThreadCreation,
  onChannelCreation,
}) => {
  const createThread = (threadTitle: string, category: string) => {
    // Simulate thread creation, replace with actual logic
    console.log(`Creating thread: ${threadTitle} in category: ${category}`);
    onThreadCreation(threadTitle, category);
  };

  const createChannel = (channelName: string, topic: string) => {
    // Simulate channel creation, replace with actual logic
    console.log(`Creating channel: ${channelName} with topic: ${topic}`);
    onChannelCreation(channelName, topic);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Group Chats/Forums */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Group Chats/Forums</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createThread("New Thread", "General");
          }}
        >
          <label
            htmlFor="threadTitle"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Thread Title
          </label>
          <input
            type="text"
            id="threadTitle"
            name="threadTitle"
            className="border rounded-md p-2 mb-4 w-full"
            placeholder="Enter thread title"
            required
          />
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="border rounded-md p-2 mb-4 w-full"
            placeholder="Enter category"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Create Thread
          </button>
        </form>
      </section>

      {/* Community Channels */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Community Channels</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createChannel("New Channel", "Technology");
          }}
        >
          <label
            htmlFor="channelName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Channel Name
          </label>
          <input
            type="text"
            id="channelName"
            name="channelName"
            className="border rounded-md p-2 mb-4 w-full"
            placeholder="Enter channel name"
            required
          />
          <label
            htmlFor="topic"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Topic
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            className="border rounded-md p-2 mb-4 w-full"
            placeholder="Enter topic"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Create Channel
          </button>
        </form>
      </section>
    </div>
  );
};

export default CommunityEngagement;
