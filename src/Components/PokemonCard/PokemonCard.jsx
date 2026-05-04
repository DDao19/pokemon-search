import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({pokemon, pokemonData, error, pokemonImage}) => {
  const pokemonExists = Object.keys(pokemonData).length > 0 ? true : false
  const pokemonName = pokemonExists ? pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1) : null
  
  const pokemonAbilities = pokemonExists ? pokemonData.abilities : null
  const abilitiesList = pokemonAbilities ? pokemonAbilities.map((item, i) => {
    return <p key={i}>{`${item.ability.name}\n`}</p>
  }) : null
  
  
  return (
    <div className="pokemon-card-component">
      {
        Object.keys(pokemonData).length > 1 ?
        <div className="card-container">
          <div className="card-wrapper">
            <img src={pokemonImage} alt="" />
            <h2>Name: {pokemonName}</h2>
            <h2>Abilities: {abilitiesList}</h2>
          </div>
        </div> :
        <div className="card-error">
          <p>{error ? "Please enter a valid pokemon name" : null}</p>
        </div>
      }
    </div>
  )
}

export default PokemonCard