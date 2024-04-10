import React from "react";
import {Link} from 'react-router-dom'

const SeriesCard = ({id,img,name}) => {
  return (
    <Link to={`/${id}`} key={id} className="relative">
      <img
        src={img}
        className="card rounded w-72 h-40"
        alt={name}
      />
      <div className="absolute bottom-1 text-sm px-5 py-1.5 bg-red-600 rounded text-white">
        New Episodes
      </div>
    </Link>
  );
};

export default SeriesCard;
