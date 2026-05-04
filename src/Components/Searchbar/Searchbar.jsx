import React, {useEffect} from 'react'
import './Searchbar.css'

const Searchbar = ({handleSearch}) => {
  
  return (
    <div>
      {/* <input 
      className="search-input" 
      type="search" 
      name='search' 
      placeholder='search pokemon'
      onChange={searchPokemon} /> */}

      <form onSubmit={handleSearch} className="search-form">
        <input type="text" name='search' placeholder="Search Pokemon" required className="search-input" />
        <button type='submit' className="search-button">Search</button>
      </form>
    </div>
  )
}

export default Searchbar