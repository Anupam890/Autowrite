import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Track the hovered item

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="flex justify-center items-center h-40">
      {/* Navbar */}
      <nav className="w-full md:w-3/4 lg:w-1/2 backdrop-blur-md bg-opacity-60 text-black px-4 md:px-8 py-4 shadow-lg flex justify-between items-center rounded-full">
        <div className="flex justify-between items-center w-full">
          <ul className="flex gap-4 md:gap-8">
            {/* List 1 */}
            <li
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
            >
              <span className="hover:text-[#6041FF] transition duration-300">Features</span>
              {hoveredItem === 1 && (
                <div className="absolute left-0 top-10 bg-white text-black p-4 shadow-lg rounded-lg z-50">
                  <p className="hover:text-[#6041FF] transition duration-300">AI Content Generation</p>
                  <p className="hover:text-[#6041FF] transition duration-300">SEO Optimization</p>
                  <p className="hover:text-[#6041FF] transition duration-300">Grammar Correction</p>
                </div>
              )}
            </li>
            {/* List 2 */}
            <li
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
            >
              <span className="hover:text-[#6041FF] transition duration-300">Pricing</span>
              {hoveredItem === 2 && (
                <div className="absolute left-0 top-10 bg-white text-black p-4 shadow-lg rounded-lg z-50">
                  <p className="hover:text-[#6041FF] transition duration-300">Free Plan - $ 0</p>
                  <p className="hover:text-[#6041FF] transition duration-300">Pro Plan - $29.99</p>
                  <p className="hover:text-[#6041FF] transition duration-300">Enterprise Plan - $99.99</p>
                </div>
              )}
            </li>
            {/* List 3 */}
            <li
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
            >
              <span className="hover:text-[#6041FF] transition duration-300">Contact</span>
              {hoveredItem === 3 && (
                <div className="absolute left-0 top-10 bg-white text-black p-4 shadow-lg rounded-lg z-50">
                  <p className="hover:text-[#6041FF] transition duration-300">Email: support@autowrite.com</p>
                  <p className="hover:text-[#6041FF] transition duration-300">Phone: +91 8522926885</p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div>
          <Link to={"/register"} className="bg-[#6041FF] hover:bg-[#5036D5] text-white font-semibold py-2 px-6 md:px-8 rounded-full transition duration-300">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
