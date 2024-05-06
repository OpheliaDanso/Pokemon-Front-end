
import { useState, useEffect } from "react";
import axios from "axios";

import LandingPage from "./Components/Landingpage.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokemonList from "./Components/PokemonList";
import SinglePokemon from "./Components/SinglePokemon";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  const [getPokemon, setGetPokemon] = useState([]);

  const URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setGetPokemon(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Hallo world</h1>
      <LandingPage />
    </>
    <div
      className="App flex flex-col"
      style={{ backgroundImage: "url('our-background.jpg')" }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow">
                <h1>Landing Page</h1>
                <PokemonList />
              </main>
            }
          />
          {/* Assuming you want a route for SinglePokemon, you might add something like this: */}
          <Route path="/pokemon/:pokemonId" element={<SinglePokemon />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
