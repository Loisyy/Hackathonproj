// pages/dashboard.tsx
import React from "react";
import Navbar from "@/componenets/navbar";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      {/* Overview Section */}
      <Navbar />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="flex justify-between">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-disc pl-4">
              <li>
                <a href="#">Text Communication</a>
              </li>
              <li>
                <a href="#">Voice Calls</a>
              </li>
              <li>
                <a href="#">Video Calls</a>
              </li>
            </ul>
          </div>
          {/* New Features/Updates */}
          <div>
            <h3 className="text-lg font-semibold mb-2">New Features/Updates</h3>
            <p>
              Stay tuned for exciting new features and updates to enhance your
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Communication Tools Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Communication Tools</h2>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Text Communication
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Voice Calls
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Video Calls
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-4 rounded-md flex-1 text-center hover:bg-blue-700"
          >
            Community Channels
          </a>
        </div>
      </section>

      {/* Settings Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="flex space-x-4">
          {/* Accessibility Settings */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              Accessibility Settings
            </h3>
            <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700">
              Customize
            </button>
          </div>
          {/* Profile and Privacy Settings */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Profile Management</h3>
            <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
