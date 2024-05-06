import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PokemonList from "./Components/PokemonList";
import SinglePokemon from "./Components/SinglePokemon";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
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
