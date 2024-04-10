import React from 'react'
import WatchItAgain from '../data/WatchItAgain.json'
import MovieCard from './MovieCard'
const WatchItAgainSection = () => {
  return (
   <>
    <h4 className="text-xl text-white font-semibold px-10">Watch It Again</h4>
    <main className="px-10 py-5 grid grid-cols-5 gap-3 items-center">
     {
        WatchItAgain.map( movie => {
            return <MovieCard id={movie.id} name={movie.name} img={movie.img} key={movie.id}/>
        })
     }
    </main>
   </>
  )
}

export default WatchItAgainSection