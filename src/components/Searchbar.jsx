import React from 'react'
import { useState } from 'react'
import searchIcon from './search.svg'
export default function Searchbar(props) {

  const [searchTerm, setsearchTerm] = useState("")

  return (
    <div className="app">
        <h1>Film Wood</h1>

        <div className='search'>
            <input
            placeholder='Search...'
            value={searchTerm}
            onChange={(e)=>setsearchTerm(e.target.value)}
            />

            <img
            src={searchIcon}
            alt='search'
            onClick={()=>props.searchMovies(searchTerm)}
            />
            
        </div>
    </div>
  )
}
