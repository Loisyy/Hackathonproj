import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-24 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Welcome InclusiveCommTech
          </h1>

          {/* Primary Value Proposition */}
          <p className="text-lg mb-8">
            Bridging Gaps
            <br />
          People With Disabilities and Underserved Communities.
          </p>

          {/* Call-to-Action */}
          <a
            href="/signup"
            className="bg-white text-blue-500 font-bold rounded-full py-3 px-6 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white shadow-md"
          >
            Sign Up
          </a>
        </div>

        {/* Illustrations/Imagery */}
        <img
           src="/close-up-team-hand-shake.jpg"
          alt="Illustration"
          className="mt-16 mx-auto max-w-full h-auto"
          />
        />
      </div>
    </div>
  );
};

export default HeroSection;
