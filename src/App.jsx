import { useState, useEffect } from "react";
import axios from "axios";

import LandingPage from "./Components/Landingpage.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokemonList from "./Components/PokemonList";
import SinglePokemon from "./Components/SinglePokemon";
import AboutUs from "./Components/AboutUs.jsx"; // Ensure this is the correct path
import Footer from "./Components/Footer";
import Fighterspage from "./Components/Fighterspage.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <div
        className="App flex flex-col"
        style={{ backgroundImage: "url('our-background.jpg')" }} //here we need to correct source of our bg image
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonId" element={<SinglePokemon />} />
          <Route path="/battle" element={<Fighterspage />} />
          <Route path="/about-us" element={<AboutUs />} />{" "}
          {/* Add this line for the About Us page */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
