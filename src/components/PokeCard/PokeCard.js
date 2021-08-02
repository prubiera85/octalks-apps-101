import React from "react";
import "./pokeCard.css";

function PokeCard({ pokemonData }) {
  return (
    <div className="pokecard">
      <div className="pokecard__img">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </div>

      <div className="pokecard__number">Nº {pokemonData.id}</div>

      <div className="pokecard__name">{pokemonData.name}</div>

      <div className="pokecard__types">
        {pokemonData.types.map((typeItem, id) => (
          <div key={id}>{typeItem.type.name}</div>
        ))}
      </div>
    </div>
  );
}

export default PokeCard;
