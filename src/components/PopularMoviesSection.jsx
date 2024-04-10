import React from 'react'
import popularMovies from '../data/popularMovies.json'
import MovieCard from './MovieCard'
const PopularMoviesSection = () => {
  return (
   <>
    <h4 className="text-xl mt-10 text-white font-semibold px-10">Popular on Netflix</h4>
    <main className="px-10 py-5 grid grid-cols-5 gap-3 items-center">
     {
        popularMovies.map( movie => {
            return <MovieCard id={movie.id} name={movie.name} img={movie.img} key={movie.id}/>
        })
     }
    </main>
   </>
  )
}

export default PopularMoviesSection