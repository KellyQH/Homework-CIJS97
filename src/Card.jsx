import React from 'react';
import './Card.css';

const Card = ({ pokemon, onOpen }) => {
  const typeElements = pokemon.types.map(type => {
    const typeClassName = 'type' + type;

    return (
      <span key={type} className={typeClassName}>
        {type}
      </span>
    );
  });

  return (
    <div className="card" onClick={() => onOpen(pokemon)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.number}</p>
      <div className='wrapper'>
        <h2>{pokemon.name}</h2>
      </div>
      <div className="types">
        {typeElements}
      </div>
    </div>
  );
}

export default Card;
