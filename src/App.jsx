import { useState, useEffect } from "react";
import axios from "axios";

import LandingPage from "./Components/Landingpage.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokemonList from "./Components/PokemonList";
import SinglePokemon from "./Components/SinglePokemon";
import Footer from "./Components/Footer";
import Fighterspage from "./Components/Fighterspage.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <div
        className="App flex flex-col"
        style={{ backgroundImage: "url('our-background.jpg')" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonId" element={<SinglePokemon />} />
          <Route path="/battle" element={<Fighterspage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
