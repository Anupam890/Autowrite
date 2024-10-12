import React, { useState } from "react";
import { toolData } from "../../../utils/tools";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
  FaTasks,
  FaComments,
  FaAddressBook,
} from "react-icons/fa";

export const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(toolData)[0]
  ); // Default to the first category

  // Icon mapping for categories
  const categoryIcons = {
    Development: <FaCode className="mr-2" />,
    Design: <FaPalette className="mr-2" />,
    Marketing: <FaBullhorn className="mr-2" />,
    ProjectManagement: <FaTasks className="mr-2" />,
    Communication: <FaComments className="mr-2" />,
    Blog_Tools: <FaAddressBook className="mr-2" />,
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4 md:h-full">
        <h2 className="text-xl font-semibold mb-4">Explore Tools</h2>
        <div className="overflow-x-auto">
          <ul className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
            {Object.keys(toolData).map((category) => (
              <li
                key={category}
                className={`flex items-center whitespace-nowrap cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 ${
                  selectedCategory === category ? "bg-gray-300 font-semibold" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryIcons[category]}
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section - Tools Display */}
      <div className="w-full md:w-3/4 p-4 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">
          {selectedCategory} Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolData[selectedCategory].map((tool, index) => (
            <Link
              to={tool.link || "#"} // Ensure it falls back if no link is provided
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer duration-200"
            >
              <h3 className="text-lg font-bold">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
