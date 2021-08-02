import React, { useEffect, useState } from "react";
import "./PokemonListFinal.css";
import Header from "../../components/Header/Header";
import PokeCard from "../../components/PokeCard/PokeCard";

function PokemonListFinal() {
  const [pokemonList, setPokemonList] = useState([]);

  //Función que trae los datos de un Pokémon
  const loadPokemonList = async (max_number) => {
    let _pokemonData = [];

    for (var i = 1; i <= max_number; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      _pokemonData.push(data);
    }

    console.log("🚀 Pokemon data retrieved!", _pokemonData);
    setPokemonList(_pokemonData);
    return _pokemonData;
  };

  // Cuando se carga la página, traemos los datos de los Pokémon
  useEffect(() => {
    loadPokemonList(30);
  }, []);

  return (
    <div className="pokemon-list-final__container">
      <Header />

      <div className="pokecard-list-grid">
        {pokemonList &&
          pokemonList.map((pokemonData, id) => {
            return <PokeCard key={id} pokemonData={pokemonData} />;
          })}
      </div>
    </div>
  );
}

export default PokemonListFinal;
