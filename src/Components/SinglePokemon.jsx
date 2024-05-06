import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PokemonList() {
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
      setPokemons(pokemonDetails.slice(0, 12)); // Only store up to 12 Pokémon at once
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-6 gap-4">
        {pokemons.map((pokemon) => (
          <Link
            to={`/pokemon/${pokemon.id}`}
            key={pokemon.id}
            className="col-span-2 flex flex-col items-center"
          >
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-20 h-20"
            />
            <p>{pokemon.name}</p>
          </Link>
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

export default PokemonList;
