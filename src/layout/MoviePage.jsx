import React from "react";
import { useParams } from "react-router-dom";
import movieData from '../data/movieData.json'
const MoviePage = () => {
  const {id} = useParams();
  const movie = movieData.find(movie => movie.id == id)
  return (
    <>
     <div className="flex">
      <div className="w-[35%] shadow-2xl shadow-gray-900 ps-20 py-10 text-white">
         <h1 className="text-4xl font-semibold">{movie.title}</h1>
         <div className="flex space-x-2 items-center mt-3  text-gray-400">
         <span className="px-2.5 py-0.5 inline-block text-white bg-yellow-500 text-sm font-semibold rounded-md">IMDB</span>
         <p className="">{movie.imdb_rating}</p>
         <p className="pl-3 font-medium">{movie.releasedyear}</p>
         <span className="px-2.5 py-0.5  text-gray-300 gap-3 block bg-gray-600 text-sm font-semibold rounded">{movie.video_quality}</span>
         </div>
         <p className="mt-3 leading-7 text-gray-300">
          Genre : {movie.genre}
         </p>
         <p className="mt-4 leading-7 text-gray-300">
          {movie.description}
         </p>
      </div>
     <img src={movie.img} alt={movie.title} className="w-[65%]" />
     </div>
    </>
  );
};

export default MoviePage;
