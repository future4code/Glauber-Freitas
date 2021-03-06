import axios from 'axios';
import './App.css';
import PokeCard from './components/PokeCard/PokeCard';
import React, { useEffect, useState } from 'react';


const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("")
  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res)=>{
        setPokeList (res.data.results)
      })
      .catch((err)=>{
        console.log(err)
      })
  })
  const changePokemonName = (e) =>{
    setPokeName(e.target.value)
  }
  
  return (
    <div className="App">
      <select onChange={changePokemonName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) =>{
          return(
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon = {pokeName}/>}
    </div>
  );
}
export default App;