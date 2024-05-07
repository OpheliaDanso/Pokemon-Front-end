import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FightersPage({ selectedPokemon }) {
  const [randomPokemon, setRandomPokemon] = useState(null);

  useEffect(() => {
    fetchRandomPokemon();
  }, [selectedPokemon]);

  const fetchRandomPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${getRandomIndex()}`
      );
      setRandomPokemon(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {selectedPokemon && (
          <div className="col-span-1 flex flex-col items-center">
            <div className="relative">
              <span className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-md">
                {selectedPokemon.id}
              </span>
              <img
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
                className="w-32 h-32 object-cover"
              />
            </div>
            <p className="font-roboto text-light-yellow text-xs mt-2">
              {selectedPokemon.name}
            </p>
            <p className="font-roboto text-light-yellow text-xs">
              {selectedPokemon.types.map((type) => type.type.name).join(", ")}
            </p>
          </div>
        )}
        {randomPokemon && (
          <div className="col-span-1 flex flex-col items-center">
            <div className="relative">
              <span className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-md">
                {randomPokemon.id}
              </span>
              <img
                src={randomPokemon.sprites.front_default}
                alt={randomPokemon.name}
                className="w-32 h-32 object-cover"
              />
            </div>
            <p className="font-roboto text-light-yellow text-xs mt-2">
              {randomPokemon.name}
            </p>
            <p className="font-roboto text-light-yellow text-xs">
              {randomPokemon.types.map((type) => type.type.name).join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FightersPage;
