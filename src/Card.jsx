import React from 'react';
import './Card.css';

const Card = ({ pokemon }) => {
  const typeElements = pokemon.types.map(type => {
     // create a new array by mapping over pokemon types in App.jsx
    const typeClassName = 'type' + type; // create a new class name for each type

    return (
      <span key={type} className={typeClassName}>
        {type}
      </span>
    );
  });

  const clickMe = () => {
    alert(pokemon.name + ' says hello');
  }

  return (
    <div className="card">
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.number}</p>
      <div className='wrapper'>  
        <h2>{pokemon.name}</h2>
        <button onClick={clickMe}>Click me</button>
      </div>
      <div className="types">
        {typeElements}
      </div>
      
    </div>
  );
}

export default Card;
