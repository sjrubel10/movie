import { useParams } from "react-router-dom";

import React, { useEffect, useState } from 'react';

import { get_movie, searchMovies } from './SearchMovies';

import MovieCard from '../MovieCard';

import '../css/movie.css';

// const get_movie = async ( IMDbId ) => {
//     const response = await fetch(`${API_URL}&i=${IMDbId}`);
//     const movie_data = await response.json();
// }

 const Movie = () => {

    const [relatedMovies, setRelatedMovies] = useState([]);

    const [moviesData, setMoviesData] = useState({});
    
    const {id} = useParams();

    
    useEffect(() => { 
        get_movie(id).then(data=> {
                setMoviesData(data);
        });
    }, [id]);

    useEffect(()=>{
        if(moviesData.hasOwnProperty('Title')){

            // const temptitle = moviesData.Title.split(' ')[1];

            const temptitle = moviesData.Title.split(' ').slice(0,1).join(' ');

            searchMovies(temptitle).then(data=> {

                setRelatedMovies(data)
            });
        }
        
    },[moviesData])

    // console.log( moviesData );

    return (

        <div className="conent" key={moviesData.imdbID}>
            <div className="movie-content-holder">
                <div className="movie-container">
                    <h1>{moviesData.Title}</h1>
                    <div className="movie-info-holder">

                        <div className="info-holder">
                            <span>IMDB Rating: {moviesData.imdbRating !== "N/A" ? moviesData.imdbRating :"N/A"}</span><br/>
                            <span>Actors: {moviesData.Actors}</span>
                            <p>Released : {moviesData.Released}</p>
                            <span> Language: {moviesData.Language}</span>
                        </div>

                        <div className="cover-image-holder">
                            <img className="cover-image" src={moviesData.Poster !== "N/A" ? moviesData.Poster : "https://via.placeholder.com/400"} alt={moviesData.Title}  />
                        </div>

                        <div className="info-holder">
                            <div className="country-name">Country: {moviesData.Country}</div>
                            <div className="description">
                                <p>{moviesData.Plot !== "" ? moviesData.Plot : " No Description is provided"}</p>
                            </div>
                        </div>

                    </div> 
                </div>
                 
            </div>
             
             <div className="">
                
               <span className="related-movie">Related Movie</span>
               {relatedMovies.length>0 ? 
            (
                <div className="container">
                    {/* <MovieCard movies1 = {movies[0]}/> */}

                    {relatedMovies.map( (movie)=> (
                        <MovieCard movies1 = {movie} key= {Math.random()}/>
                    ))}

                </div>
            ) : 
            (
                <div className="empty">
                    <h2> No Movies Found</h2>
                </div>
            )
           }
            </div>
            
        </div>

    )
}



export default Movie
 