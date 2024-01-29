"use client";
import React from "react";
import Navbar from "@/componenets/navbar";
import HeroSection from "@/componenets/herosection";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-lightGray shadow-lg rounded-md text-darkGray">
      <HeroSection />
      <Navbar />
      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-deepPurple">Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="list-disc pl-4">
              <li>
                <a
                  href="#"
                  className="text-blue hover:underline focus:outline-none focus:ring focus:border-blue"
                >
                  Text Communication
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue hover:underline focus:outline-none focus:ring focus:border-blue"
                >
                  Voice Calls
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue hover:underline focus:outline-none focus:ring focus:border-blue"
                >
                  Video Calls
                </a>
              </li>
            </ul>
          </div>
          {/* New Features/Updates */}
          <div>
            <h3 className="text-xl font-semibold mb-4">New Features/Updates</h3>
            <p className="text-gray-700">
              Stay tuned for exciting new features and updates to enhance your
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Communication Tools Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-deepPurple">
          Communication Tools
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <a
            href="#"
            className="bg-blue text-white p-6 rounded-md text-center hover:bg-darkBlue focus:outline-none focus:ring focus:border-blue transition duration-300"
          >
            Text Communication
          </a>
          <a
            href="#"
            className="bg-blue text-white p-6 rounded-md text-center hover:bg-darkBlue focus:outline-none focus:ring focus:border-blue transition duration-300"
          >
            Voice Calls
          </a>
          <a
            href="#"
            className="bg-blue text-white p-6 rounded-md text-center hover:bg-darkBlue focus:outline-none focus:ring focus:border-blue transition duration-300"
          >
            Video Calls
          </a>
          <a
            href="#"
            className="bg-blue text-white p-6 rounded-md text-center hover:bg-darkBlue focus:outline-none focus:ring focus:border-blue transition duration-300"
          >
            Community Channels
          </a>
        </div>
      </section>

      {/* Settings Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-deepPurple">Settings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*Accessibility Settings */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange">
              Accessibility Settings
            </h3>
            <button className="bg-blue text-white p-4 rounded-md w-full hover:bg-darkBlue focus:outline-none focus:ring focus:border-blue transition duration-300">
              Customize
            </button>
          </div>
          {/* Profile and Privacy Settings */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange">
              Profile Management
            </h3>
            <button className="bg-blue text-white p-4 rounded-md w-full hover:bg-darkBlue focus:outline-none focus:ring focus:border-blue transition duration-300">
              Edit Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;