import React, { useState } from "react";
import PokemonImage from "../assets/images/pokemonNew.webp";
import logo from "../assets/images/pk ball.png";
import { Link } from "react-router-dom";

function LandingPage() {
  const [list, setList] = useState();

  const handleChange = () => {
    setList();
  };
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
            <input
              type="text"
              value={list}
              placeholder="Enter your name here..."
              onChange={handleChange}
            />
            <img
              src={logo} // corrected path to image
              alt="pokemon ball"
              width={100}
              height={100} // removed onClick from image
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
