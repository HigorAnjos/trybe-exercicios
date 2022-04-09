import React from "react";
import Card from './Card'
import pokedexdata from './../data'
import './Pokedex.css'


class Pokedex extends React.Component {
  render () {
    
    const Cards = pokedexdata.map(pokemon => {
      return (
        <Card 
        key = {pokemon.id}
        name={pokemon.name} 
        type={pokemon.type} 
        Weight={pokemon.averageWeight.value}
        measurementUnit = {pokemon.averageWeight.measurementUnit}
        img = {pokemon.image}
      ></Card>
      )
    })
    
    
    return ( <div className="conteiner">{Cards}</div> )
  }
}

export default Pokedex