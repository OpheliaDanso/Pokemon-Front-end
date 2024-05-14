import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  const fetchPokemons = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        return Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        );
      })
      .then((pokemonDetails) => setPokemons(pokemonDetails))
      .catch((error) => console.error("Error loading the pokemons:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white bg-opacity-75 shadow-xl rounded-lg p-5">
        <div className="grid grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon.id}`}
              key={pokemon.id}
              className="col-span-1"
            >
              <div className="flex flex-col items-center bg-white bg-opacity-50 shadow-md rounded-lg p-4">
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="h-20 w-20"
                />
                <p className="text-center mt-2">{pokemon.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {prevUrl && (
            <button
              onClick={() => fetchPokemons(prevUrl)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
          )}
          {nextUrl && (
            <button
              onClick={() => fetchPokemons(nextUrl)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
