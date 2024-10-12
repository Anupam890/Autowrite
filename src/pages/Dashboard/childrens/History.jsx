import React from "react";

function History() {
  // Sample data for history entries
  const historyData = [
    { id: 1, action: "Created a new blog post", date: "2024-10-01" },
    { id: 2, action: "Edited blog post titled 'React Basics'", date: "2024-10-02" },
    { id: 3, action: "Deleted a comment on 'Learning JavaScript'", date: "2024-10-03" },
    { id: 4, action: "Published a new article", date: "2024-10-05" },
    { id: 5, action: "Updated profile settings", date: "2024-10-06" },
  ];

  const handleViewGeneratedData = () => {
    // Add logic to view generated data here
    alert("Viewing generated data...");
  };

  return (
    <div className=" h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">🕒 History</h2>
        <div className="overflow-y-auto max-h-[70vh] mb-4">
          {historyData.length > 0 ? (
            <ul className="space-y-2">
              {historyData.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-md flex justify-between items-center"
                >
                  <span className="text-gray-800">{item.action}</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No history available.</p>
          )}
        </div>
        <button
          onClick={handleViewGeneratedData}
          className="w-full bg-[#6041FF] text-white p-3 rounded-md hover:bg-[#725dd8] transition duration-300"
        >
          View Generated Data
        </button>
      </div>
    </div>
  );
}

export default History;
