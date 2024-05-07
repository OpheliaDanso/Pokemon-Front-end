import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FightersPage() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  const fetchPokemons = async (url) => {
    try {
      const response = await axios.get(url);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      const pokemonDetails = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonRecord = await axios.get(pokemon.url);
          return pokemonRecord.data;
        })
      );
      setPokemons(pokemonDetails.slice(0, 2)); // Only store first two Pokémon for battle
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="col-span-1 flex flex-col items-center">
            <div className="relative">
              <span className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-md">
                {pokemon.id}
              </span>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-32 h-32 object-cover"
              />
            </div>
            <p className="font-roboto text-light-yellow text-xs mt-2">
              {pokemon.name}
            </p>
            <p className="font-roboto text-light-yellow text-xs">
              {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
            {index === 0 && (
              <span className="font-bold text-2xl text-light-yellow">VS</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {prevUrl && (
          <button
            onClick={() => fetchPokemons(prevUrl)}
            className="btn btn-primary"
          >
            Previous
          </button>
        )}
        {nextUrl && (
          <button
            onClick={() => fetchPokemons(nextUrl)}
            className="btn btn-primary"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default FightersPage;
