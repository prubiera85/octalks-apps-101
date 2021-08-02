import React from "react";
import "./pokeCardLocal.css";

function PokeCardLocal({ pokemonData, onLove, onHate }) {
  return (
    <div className="pokecard">
      <div className="pokecard__img">
        <img src={pokemonData.img} alt={pokemonData.name} />
      </div>

      <div className="pokecard__number">Nº {pokemonData.id}</div>

      <div className="pokecard__name">{pokemonData.name}</div>

      <div className="pokecard__types">
        {pokemonData.types.map((typeItem, id) => (
          <div key={id}>{typeItem}</div>
        ))}
      </div>

      <div className="pokecard__actions">
        <div
          className="pokecard__button pokecard__button--love"
          onClick={() => onLove(pokemonData.name)}
        >
          🥰
        </div>

        <div
          className="pokecard__button pokecard__button--hate"
          onClick={() => onHate(pokemonData.name)}
        >
          🤮
        </div>
      </div>
    </div>
  );
}

export default PokeCardLocal;
