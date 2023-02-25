import React from 'react';
import './App.css'

let i = 1;

function App() {
  const [pokemon, setPokemon] = React.useState({});
  function proximo(){
    i = i+1;
    Carregar()
  }
  function anterior(){
    i = i-1;
    Carregar()
  }
  function Carregar(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  return (
    
    pokemon.sprites ?
      <div className='App'>

        <button onClick={anterior}>Back</button> <button onClick={proximo}>Next</button>
        <img src={pokemon.sprites.front_default}/>
        <label>Nome:{pokemon.name} Habilidade:{pokemon.abilities[0].ability.name}</label>

      </div>
    :
      <div className='Inicio'>
        <button onClick={Carregar}>Carregar Pokemons</button>
      </div>
  );
}

export default App;