import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-yellow-400 py-2 font-montserrat">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-3 py-2 rounded-md hover:bg-gray-700">
            POKEDEX
          </button>
          <button className="px-3 py-2 rounded-md hover:bg-gray-700">
            TO BATTLE
          </button>
        </div>
        <div className="flex-1"></div>
        <div className="flex space-x-4">
          <button className="px-3 py-2 rounded-md hover:bg-gray-700">
            LEADERBOARD
          </button>
          <button className="px-3 py-2 rounded-md hover:bg-gray-700">
            ABOUT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
