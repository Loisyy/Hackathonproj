// components/Navbar.tsx

import React, { useState } from "react";
import Link from "next/link";
//import AccessibilitySettings from "../../components/accessibilitysettings";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-deepPurple text-lightGray p-4">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="text-lg font-semibold cursor-pointer mr-4">
              Home
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="text-lg font-semibold cursor-pointer mr-4">
              Dashboard
            </div>
          </Link>
          {/* Link to the Accessibility Page */}

          <Link href="/accessibility">
            <div className="text-lg font-semibold cursor-pointer mr-4">
              Accessibility
            </div>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-lg font-semibold cursor-pointer"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-deepPurple text-lightGray flex flex-col items-center">
            <Link href="/">
              <div className="text-lg font-semibold cursor-pointer my-4">
                Home
              </div>
            </Link>
            <Link href="/dashboard">
              <div className="text-lg font-semibold cursor-pointer my-4">
                Dashboard
              </div>
            </Link>
            {/* Link to the Accessibility Page */}
            <Link href="/accessibility">
              <div className="text-lg font-semibold cursor-pointer my-4">
                Accessibility
              </div>
            </Link>
            <button onClick={toggleMenu} className="text-lg font-semibold my-4">
              ✕
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
