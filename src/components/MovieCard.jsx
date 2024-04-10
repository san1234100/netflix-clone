import React from "react";
import {Link} from 'react-router-dom'

const MovieCard = ({id,img,name}) => {
  return (
    <Link to={`/${id}`} key={id}>
      <img
        src={img}
        className="card rounded w-72 h-40"
        alt={name}
      />
    </Link>
  );
};

export default MovieCard;
