import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Pokemon(props) {
  const listItems = props.pokedex.map(pkmn =>
    <li key={pkmn.number}>{pkmn.name}</li>
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<Pokemon pokedex={pokedex}/>);
