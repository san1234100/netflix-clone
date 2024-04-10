import React from 'react'
import series from '../data/series.json'
import SeriesCard from './SeriesCard'
const SeriesSection = () => {
  return (
   <>
    <h4 className="text-xl mt-10 text-white font-semibold px-10">Series on Netflix</h4>
    <main className="px-10 py-5 grid grid-cols-5 gap-3 items-center">
     {
        series.map( movie => {
            return <SeriesCard id={movie.id} name={movie.name} img={movie.img} key={movie.id}/>
        })
     }
    </main>
   </>
  )
}

export default SeriesSection