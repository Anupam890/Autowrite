import React, { useState } from 'react';

const Fav = () => {
  // Sample data for favorite items
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'React.js', type: 'Library', desc: 'JavaScript library for UI' },
    { id: 2, name: 'Node.js', type: 'Runtime', desc: 'JavaScript runtime environment' },
    { id: 3, name: 'Tailwind CSS', type: 'Framework', desc: 'Utility-first CSS framework' },
  ]);

  const handleRemove = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Your Favourites</h1>
      {favorites.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <li
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.type}</p>
              <p className="text-sm mt-2 text-gray-600">{item.desc}</p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">You don't have any favorites yet!</p>
      )}
    </div>
  );
};

export default Fav;
