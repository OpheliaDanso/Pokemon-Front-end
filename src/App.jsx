import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokemonList from "./Components/PokemonList";
import SinglePokemon from "./Components/SinglePokemon";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonId" element={<SinglePokemon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
