import React, { useState } from 'react';

// Sample data for tools and subcategories
const toolData = {
  Development: [
    { name: '🛠️ Visual Studio Code', description: 'A powerful code editor from Microsoft.' },
    { name: '🌐 GitHub', description: 'A platform for version control and collaboration.' },
    { name: '🐍 Python', description: 'A popular programming language known for its simplicity and versatility.' },
    { name: '⚙️ Postman', description: 'A tool for API development and testing.' },
    { name: '🛡️ Docker', description: 'A platform for developing, shipping, and running applications in containers.' },
  ],
  Design: [
    { name: '🎨 Figma', description: 'A web-based UI/UX design tool.' },
    { name: '📸 Canva', description: 'A graphic design platform for creating visuals.' },
    { name: '🖌️ Adobe Photoshop', description: 'A powerful image editing software for graphics and photo manipulation.' },
    { name: '🎞️ Adobe Illustrator', description: 'A vector graphics editor for creating illustrations and designs.' },
    { name: '🔍 Sketch', description: 'A digital design toolkit for UX and UI designers.' },
  ],
  Marketing: [
    { name: '📊 Google Analytics', description: 'A web analytics service for tracking and reporting website traffic.' },
    { name: '📣 Mailchimp', description: 'An email marketing service for managing campaigns.' },
    { name: '📈 HubSpot', description: 'A platform for inbound marketing, sales, and customer service.' },
    { name: '🌟 Hootsuite', description: 'A social media management tool for scheduling and monitoring posts.' },
    { name: '📉 SEMrush', description: 'An SEO tool for keyword research and competitive analysis.' },
  ],
  ProjectManagement: [
    { name: '📅 Trello', description: 'A visual project management tool for organizing tasks.' },
    { name: '🔗 Asana', description: 'A task management tool for teams to track their work.' },
    { name: '🗂️ Jira', description: 'A tool for agile project management and bug tracking.' },
    { name: '✅ Monday.com', description: 'A customizable work operating system for project management.' },
  ],
  Communication: [
    { name: '💬 Slack', description: 'A messaging platform for teams to collaborate and communicate.' },
    { name: '📞 Zoom', description: 'A video conferencing tool for online meetings and webinars.' },
    { name: '📧 Microsoft Teams', description: 'A collaboration platform that combines workplace chat, meetings, and file sharing.' },
    { name: '👥 Discord', description: 'A communication platform designed for creating communities.' },
  ],
};

export const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(toolData)[0]); // Default to the first category

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4 md:h-full">
        <h2 className="text-xl font-semibold mb-4">Explore Tools</h2>
        <ul className="space-y-2">
          {Object.keys(toolData).map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 rounded-md hover:bg-gray-200 ${selectedCategory === category ? 'bg-gray-300 font-semibold' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Tools Display */}
      <div className="w-full md:w-3/4 p-4 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">{selectedCategory} Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolData[selectedCategory].map((tool, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer duration-200">
              <h3 className="text-lg font-bold">{tool.name}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
