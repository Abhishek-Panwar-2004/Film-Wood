import React from 'react'
import './App.css'
import Container from './components/Container';
import { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar';

// a5327662

const API_URL = "http://www.omdbapi.com?apikey=a5327662";

const movie1 = {
  "Title": "Harry Potter and the Deathly Hallows: Part 2",
  "Year": "2011",
  "imdbID": "tt1201607",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([])


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("harry potter")
  }, [])

  return (
    <>
      <Searchbar searchMovies={searchMovies}/>

      {
        movies?.length > 0
          ? (
            movies.map((movie)=>(
              <Container movie={movie}/>
            ))
          )
          : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }

    </>
  )
}

export default App