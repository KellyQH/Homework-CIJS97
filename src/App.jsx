import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './App.css';
import Modal from './components/Modal.jsx';
import './Card.css';

import bulbasaur from './assets/bulbasaur.png';
import ivysaur from './assets/ivysaur.png';
import venusaur from './assets/venusaur.png';
import charmander from './assets/charmander.png';
import charmeleon from './assets/charmeleon.png';
import charizard from './assets/charizard.png';
import squirtle from './assets/squirtle.png';
import wartortle from './assets/wartortle.png';
import blastoise from './assets/blastoise.png';
import caterpie from './assets/caterpie.png';
import metapod from './assets/metapod.png';
import butterfree from './assets/butterfree.png';

const initialPokemons = [
  { number: '#0001', name: 'Bulbasaur', types: ['Grass', 'Poison'], image: bulbasaur },
  { number: '#0002', name: 'Ivysaur', types: ['Grass', 'Poison'], image: ivysaur },
  { number: '#0003', name: 'Venusaur', types: ['Grass', 'Poison'], image: venusaur },
  { number: '#0004', name: 'Charmander', types: ['Fire'], image: charmander },
  { number: '#0005', name: 'Charmeleon', types: ['Fire'], image: charmeleon },
  { number: '#0006', name: 'Charizard', types: ['Fire', 'Flying'], image: charizard },
  { number: '#0007', name: 'Squirtle', types: ['Water'], image: squirtle },
  { number: '#0008', name: 'Wartortle', types: ['Water'], image: wartortle },
  { number: '#0009', name: 'Blastoise', types: ['Water'], image: blastoise },
  { number: '#0010', name: 'Caterpie', types: ['Bug'], image: caterpie },
  { number: '#0011', name: 'Metapod', types: ['Bug'], image: metapod },
  { number: '#0012', name: 'Butterfree', types: ['Bug', 'Flying'], image: butterfree },
];

function App() {
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [open, setOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [value, setValue] = useState("");
  const [filteredCard, setFilteredCard] = useState(initialPokemons);

  const handleOpen = (pokemon) => {
    setOpen(true);
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPokemon(null);
  };

  const handleSave = (updatedPokemon) => {
    setPokemons((prevPokemons) =>
      prevPokemons.map((pokemon) =>
        pokemon.number === updatedPokemon.number ? updatedPokemon : pokemon
      )
    );
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const cardList = pokemons.map(pokemon => ({...pokemon, title: `${pokemon.number} - ${pokemon.name}` }));
      const result = cardList.filter(card => card.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredCard(result);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [value, pokemons]);

  return (
    <div>
      <div>
        <label>Search here </label>
        <input onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="app">
        {filteredCard.map((pokemon) => (
          <Card key={pokemon.number} pokemon={pokemon} onOpen={handleOpen} />
        ))}
      </div>
      <Modal isOpen={open} onClose={handleClose} onSave={handleSave} pokemon={selectedPokemon} />
    </div>
  );
}

export default App;
