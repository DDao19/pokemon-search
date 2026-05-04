import React, { useState, useEffect } from 'react'
import Searchbar from './Components/Searchbar/Searchbar'
import PokemonCard from './Components/PokemonCard/PokemonCard'
import './styles/App.css'

const App = () => {
  const [name, setName] = useState('')
  const [data, setData] = useState({})
  const [image, setImage] = useState('')
  const [error, setError] = useState(false)

  // Grabs input value
  const handleSearch = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const pokemonName = formData.get("search")
    setName(pokemonName.toLowerCase())
  }

  // fetches API
  const fetchData = async (name) => {
    if (name.length > 0) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemonData = await response.json()
        setData(pokemonData)
        setError(false)
      } catch (err) {
        setError(!error)
        setData({})
        console.log("Please enter a valid Pokemon Name")
      }
    }
  }
  
  const pokemonImage = async () => {

    if (Object.keys(data).length > 0) {
      try {
        const response = await fetch(data.forms[0].url)
        const image = await response.json()
        setImage(image.sprites.front_default)
      } catch (err) {
        setImage('')
        console.log("Error: something went wrong")
      }
    }
  }
  
  useEffect(() => {
    fetchData(name)
  }, [name])

  useEffect(() => {
    pokemonImage(data)
  }, [data])

  return (
    <div className="app">
      <h1>Pokemon Search</h1>
      <p>Search for a Pokemon</p>
      <Searchbar handleSearch={handleSearch} />
      <PokemonCard 
      pokemon={name} 
      pokemonData={data} 
      error={error} 
      pokemonImage={image} />
    </div>
  )
}


export default App