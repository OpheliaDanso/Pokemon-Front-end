import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-yellow-400 py-2 font-montserrat">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-700">
            POKEDEX
          </Link>
          <Link to="/battle" className="px-3 py-2 rounded-md hover:bg-gray-700">
            TO BATTLE
          {/* Wrap buttons with Link, pointing to appropriate routes */}
          <Link to="/pokedex" className="text-yellow-400 font-mono">
            <button className="px-3 py-2 rounded-md hover:bg-gray-700">
              POKEDEX
            </button>
          </Link>
          <Link to="/battle" className="text-yellow-400 font-mono">
            <button className="px-3 py-2 rounded-md hover:bg-gray-700">
              TO BATTLE
            </button>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex space-x-4">
          <Link
            to="/leaderboard"
            className="px-3 py-2 rounded-md hover:bg-gray-700"
          >
            LEADERBOARD
          </Link>
          <Link to="/about" className="px-3 py-2 rounded-md hover:bg-gray-700">
            ABOUT US
          <Link to="/leaderboard" className="text-yellow-400 font-mono">
            <button className="px-3 py-2 rounded-md hover:bg-gray-700">
              LEADERBOARD
            </button>
          </Link>
          <Link to="/about-us" className="text-yellow-400 font-mono">
            <button className="px-3 py-2 rounded-md hover:bg-gray-700">
              ABOUT US
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
