import { useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react';

import { searchMovies, get_movie } from './SearchMovies'

import '../css/movie.css';

// const get_movie = async ( IMDbId ) => {
//     const response = await fetch(`${API_URL}&i=${IMDbId}`);
//     const movie_data = await response.json();
// }

 const Movie = () => {

    const [relatedMovies, setRelatedMovies] = useState([]);

    const [moviesData, setMoviesData] = useState([]);
    
    const {id} = useParams();

    useEffect(() => { 

        get_movie(id).then(data=> {

                setMoviesData(data);

        });

        console.log(moviesData.Title);
        searchMovies(moviesData.Title).then(data=> {
            setRelatedMovies(data)
        });

        // console.log( relatedMovies );

    }, []);
   
    return (

        <div className="conent" key={moviesData.imdbID}>
            <div className="movie-content-holder">
            <h1>{moviesData.Title}</h1>
            <div className="movie-info-holder">
                <span>IMDB Rating: {moviesData.imdbRating !== "N/A" ? moviesData.imdbRating :"N/A"}</span><br/>
                <span>Actors: {moviesData.Actors}</span>
                <p>Released : {moviesData.Released}</p>

                <span> Language: {moviesData.Language}</span>
                <div className="cover-image">
                    <img src={moviesData.Poster !== "N/A" ? moviesData.Poster : "https://via.placeholder.com/400"} alt={moviesData.Title}  />
                </div>

                <div className="country-name">Country: {moviesData.Country}</div>
                <div className="description">
                    <p>{moviesData.Plot !== "" ? moviesData.Plot : " No Description is provided"}</p>
                </div>

            </div>  
            </div>
             
            
        </div>

    )
}



export default Movie
 