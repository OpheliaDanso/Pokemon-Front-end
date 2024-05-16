import { useState } from "react";
import PokemonImage from "../assets/images/pokemonNew.webp";
import logo from "../assets/images/pokemon_PNG98.png";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/pokemon?username=${userName}`);
      const inputValue = event.target.value;
      localStorage.setItem("userName", inputValue);
    }
  };

  return (
    <div
      className="h-screen grid grid-cols-2 content-center "
      style={{
        backgroundImage: `url(${PokemonImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="font-bold text-4xl flex justify-center underline text-yellow-500">
        <h1>POKEMON BATTLES</h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter your name here..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-10 w-80 border-4 border-yellow-500"
        />
        <Link to="/pokemon">
          <div className="flex justify-center items-center">
            <img src={logo} alt="pokemon ball" width={200} height={200} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
