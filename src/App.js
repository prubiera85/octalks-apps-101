import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonList from "./pages/PokemonListFinal/PokemonListFinal";
import PokemonListLocal from "./pages/PokemonListTest/PokemonListTest";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/pokedex">
            <PokemonList />
          </Route>
          <Route path="/pokedexlocal">
            <PokemonListLocal />
          </Route>
          <Route path="/tests">
            <TestPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
