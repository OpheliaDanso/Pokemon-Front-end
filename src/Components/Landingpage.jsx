import React from "react";
import PokemonImage from "../assets/images/pokemonNew.webp";

function LandingPage() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-end"
      style={{
        backgroundImage: `url(${PokemonImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="font-bold text-2xl grid grid-rows-2 mb-20 ">
        <h1>POKEMON</h1>
        <h2>BATTLES</h2>
        <div className=" flex justify-center align-middle w-10">
          <input type="text" placeholder="Enter your name here..." />
          <img
            src="./src/assets/images/pk ball.png"
            alt="pokemon ball"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
