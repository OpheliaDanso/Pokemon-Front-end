import React from "react";
import PokemonImage from "../assets/images/pokemonNew.webp";
import logo from "../assets/images/pk ball.png";
import { Link } from "react-router-dom";

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
      <div className="font-bold text-2xl grid grid-rows-2 mb-20 text-white">
        <h1>POKEMON</h1>
        <h2>BATTLES</h2>
        <Link to="/pokemon">
          <div className="flex justify-center items-center w-10">
            <input type="text" placeholder="Enter your name here..." />
            <img
              src={logo} // corrected path to image
              alt="pokemon ball"
              width={100}
              height={100}
              onChange={() => {}} // removed onClick from image
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
