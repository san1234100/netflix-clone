import React from 'react'
import trendingMovies from '../data/trendingPage.json'
import MovieCard from './MovieCard'
const TrendingSection = () => {
  return (
   <>
    <h4 className="text-xl text-white font-semibold px-10">Trending Movies</h4>
    <main className="px-10 py-5 grid grid-cols-5 gap-3 items-center">
     {
        trendingMovies.map( movie => {
            return <MovieCard id={movie.id} name={movie.name} img={movie.img} key={movie.id}/>
        })
     }
    </main>
   </>
  )
}

export default TrendingSection