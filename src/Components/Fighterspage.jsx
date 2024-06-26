import { useEffect, useState } from "react";
import axios from "axios";

function FightersPage({ selectedPokemon }) {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [winner, setWinner] = useState(null);

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

  const fight = () => {
    // Compare selectedPokemon and randomPokemon stats to determine the winner
    const selectedPokemonTotalStats = getTotalStats(selectedPokemon);
    const randomPokemonTotalStats = getTotalStats(randomPokemon);

    if (selectedPokemonTotalStats > randomPokemonTotalStats) {
      setWinner(selectedPokemon.name);
    } else if (selectedPokemonTotalStats < randomPokemonTotalStats) {
      setWinner(randomPokemon.name);
    } else {
      setWinner("It's a tie!");
    }
  };

  const getTotalStats = (pokemon) => {
    // Calculate the total stats of a Pokemon
    return pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {selectedPokemon && <RenderPokemon pokemon={selectedPokemon} />}
        {randomPokemon && <RenderPokemon pokemon={randomPokemon} />}
      </div>
      <div className=" text-center pd-">
        <button
          onClick={fight}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Ready Fight!!!
        </button>
        {winner && (
          <p className="mt-4 font-semibold text-2xl text-yellow-400">
            {winner} wins!
          </p>
        )}
      </div>
    </div>
  );
}

const RenderPokemon = ({ pokemon }) => {
  return (
    <div className="flex justify-center align-middle flex-col w-full lg:flex-row h-screen mt-10">
      <div className="grid w-5/6  card bg-gray-500 bg-opacity-80 rounded-box place-items-center">
        <div className="col-span-1 flex flex-col items-center">
          <div className="relative">
            <span className="absolute bg-gray-800 text-white px-2 py-1 rounded-md">
              {pokemon.id}
            </span>
            <img
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
              className="h-5/6"
            />
          </div>
          <p className="font-roboto text-yellow-400 mt-2">{pokemon.name}</p>
          <p className="font-roboto text-yellow-400">
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FightersPage;
