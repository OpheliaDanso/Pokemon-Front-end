import { useState, useEffect } from "react";
import axios from "axios";

import LandingPage from "./Components/Landingpage.jsx";

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
  );
}

export default App;
