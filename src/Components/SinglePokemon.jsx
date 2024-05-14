import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePokemon() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon details:", error);
        setError(error);
        setLoading(false);
      });
  }, [pokemonId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading details. Please try again later.
      </div>
    );

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-5">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="block w-40 h-40 object-cover rounded-full mx-auto md:mx-0"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-center md:text-left">
              {pokemon.name}
            </h1>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Stats</h2>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name} className="text-gray-700">
                    {stat.stat.name.toUpperCase()}: {stat.base_stat}
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-semibold mt-4">Abilities</h2>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name} className="text-gray-700">
                    {ability.ability.name.replace("-", " ").toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePokemon;
