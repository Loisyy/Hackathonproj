import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        {/* Home */}
        <a href="/" className="mr-4 hover:text-gray-400">
          Home
        </a>
        {/* Features */}
        <a href="/features" className="mr-4 hover:text-gray-400">
          Features
        </a>
        {/* Community */}
        <a href="/community" className="mr-4 hover:text-gray-400">
          Community
        </a>
        {/* Resources */}
        <a href="/resources" className="mr-4 hover:text-gray-400">
          Resources
        </a>
      </div>
      <div className="flex items-center">
        {/* Language Selector */}
        <select className="mr-4">
          <option value="en">English</option>
          <option value="fr">French</option>
          {/* Add more language options if applicable */}
        </select>
        {/* User Profile */}
        <a href="/profile" className="hover:text-gray-400">
          User Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
