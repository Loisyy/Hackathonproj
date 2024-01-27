import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white py-24 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Headline */}
          <h1 className="text-4xl font-bold mb-4">Welcome to our Platform</h1>

          {/* Primary Value Proposition */}
          <p className="text-lg mb-8">
            Discover the power of our platform
            <br />
            to solve your problems.
          </p>

          {/* Call-to-Action */}
          <a
            href="/signup"
            className="bg-white text-blue-500 font-bold rounded-full py-3 px-6 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
          >
            Sign Up
          </a>
        </div>

        {/* Illustrations/Imagery */}
        <img
          src="/illustration.png"
          alt="Illustration"
          className="mt-16 mx-auto max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;