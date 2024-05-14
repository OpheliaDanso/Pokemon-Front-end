import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePokemon() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemon();

    // Cleanup function to handle unmounting
    return () => setPokemon(null);
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
      <div className="bg-gray-600 bg-opacity-80 shadow-lg rounded-lg p-5 mt-10 ">
        <div className="grid grid-cols-2 items-center content-center">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="block object-cover rounded-full mx-auto md:mx-0 h-5xl"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center md:text-left text-light-yellow">
              {pokemon.name}
            </h1>
            <div className="mt-4 text-light-yellow">
              <h2 className="text-xl font-semibold">Stats</h2>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name.toUpperCase()}: {stat.base_stat}
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-semibold mt-4">Abilities</h2>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>
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
