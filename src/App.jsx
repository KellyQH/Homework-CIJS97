import React from 'react';
import Card from './Card.jsx';

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

import './App.css';

const pokemons = [
  { number: '#0001', name: 'Bulbasaur', types: ['Grass', 'Poison'], image: bulbasaur},
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
    return (
        <div className="app">
            {pokemons.map(pokemon => (
              // maps over the pokemons array, creating a Card component for each Pokemon
                <Card key={pokemon.number} pokemon={pokemon} /> //unique key, set to Pokemon number.
            ))}
        </div>
    );
}

export default App;
