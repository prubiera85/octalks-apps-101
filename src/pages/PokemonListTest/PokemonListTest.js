import React, { useEffect, useState } from "react";
import "./PokemonListTest.css";
import Header from "../../components/Header/Header";
import PokeCardLocal from "../../components/PokeCardLocal/PokeCardLocal";
import LoveList from "../../components/LoveList/LoveList";
import HateList from "../../components/HateList/HateList";

function PokemonListTest() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loveList, setLoveList] = useState([]);
  const [hateList, setHateList] = useState([]);

  //Función que trae los datos de un Pokémon
  const loadPokemonList = async () => {
    const response = await fetch("jsonExample/jsonExample.json");
    const _pokemonData = await response.json();
    console.log("🚀 Pokemon data retrieved!", _pokemonData);
    setPokemonList(_pokemonData);
  };

  // Cuando se carga la página, traemos los datos de los Pokémon
  useEffect(() => {
    loadPokemonList();
  }, []);

  const onLove = (item) => {
    console.log("😍 Love it!", item);
    setLoveList([...loveList, item]);
  };

  const onHate = (item) => {
    console.log("💩 Do not like!", item);
    setHateList([...hateList, item]);
  };

  return (
    <div className="pokemon-list__container">
      <Header />

      <div className="pokecard-list__grid">
        {pokemonList &&
          pokemonList.map((pokemonData, id) => {
            return (
              <PokeCardLocal
                key={id}
                pokemonData={pokemonData}
                onLove={onLove}
                onHate={onHate}
              />
            );
          })}
      </div>

      <div className="pokemon-list__classification-container">
        <LoveList data={loveList} />
        <HateList data={hateList} />
      </div>
      
    </div>
  );
}

export default PokemonListTest;
