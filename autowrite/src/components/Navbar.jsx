import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <h1>Logo</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-purple-600">Products</li>
          <li className="cursor-pointer hover:text-purple-600">Pricing</li>
          <li className="cursor-pointer hover:text-purple-600">Contact Us</li>
          <li className="cursor-pointer hover:text-purple-600">Tools</li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 font-medium">Sign In</button>
          <button className="bg-[#6D48F8] text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-600">
            Get Started
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-purple-600">Products</li>
            <li className="cursor-pointer hover:text-purple-600">Pricing</li>
            <li className="cursor-pointer hover:text-purple-600">Contact Us</li>
            <li className="cursor-pointer hover:text-purple-600">Tools</li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="block w-full text-left text-gray-700 font-medium">Sign In</button>
            <button className="block w-full text-white bg-[#6D48F8] py-2 rounded-md font-semibold hover:bg-purple-600">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
