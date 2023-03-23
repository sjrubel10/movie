import React from "react";

import { Link } from "react-router-dom";

const MovieCard = (  props  ) => {

    const movies1 = props.movies1;

    return (
        <div className="movie" >
            <Link to = {`/movie/${movies1.imdbID}`} >
                <div>
                    <p>{movies1.Year}</p>
                </div>
                <div>
                    <img src={movies1.Poster !== "N/A" ? movies1.Poster : "https://via.placeholder.com/400"} alt={movies1.Title} />
                </div>

                <div>
                    <span>{movies1.Type}</span>
                    <h3>{movies1.Title}</h3>
                </div>
            </Link>
        </div>

    );
}

export default MovieCard;

