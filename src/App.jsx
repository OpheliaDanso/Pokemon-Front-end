import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokemonList from "./Components/Pokemonlist.jsx";
import SinglePokemon from "./Components/Singlepokemon.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Footer from "./Components/Footer";
import FightersPage from "./Components/Fighterspage.jsx";
import LandingPage from "./Components/Landingpage.jsx"; // Move this import here
import Image from "./assets/images/pokemonNew.webp";
import LeaderBoard from "./Components/Leaderboard.jsx";
import { useState } from "react";
import "./index.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div
      className="App flex flex-col h-full"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/pokemon"
          element={<PokemonList onSelectPokemon={setSelectedPokemon} />}
        />
        <Route path="/pokemon/:pokemonId" element={<SinglePokemon />} />
        <Route
          path="/battle"
          element={<FightersPage selectedPokemon={selectedPokemon} />}
        />
        <Route path="/leaderBoard" element={<LeaderBoard />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
