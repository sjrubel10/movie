import React, { useEffect, useState } from "react";

import MovieCard from '../MovieCard';
import SearchIcon from '../search.svg';
import { searchMovies } from './SearchMovies';


const Home = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setsearchTerm] = useState('');

    // const get_movie = async ( IMDbId ) => {
    //     const response = await fetch(`${API_URL}&i=${IMDbId}`);
    //     const movie_data = await response.json();
    // }


    useEffect(() => {

        searchMovies('Spiderman').then(data=> {
            setMovies(data)
        });
        // Wp_api_data();
    
    }, [] );

    const searchTermMovies = (term) => {
        searchMovies(term).then(data=> {
            setMovies(data)
        });
    }

    const onChangeSearch = (value) => {

        setsearchTerm( value );

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            onChangeSearch(e.target.value)
            searchTermMovies(searchTerm)

        }

      }

    return (

        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                    placeholder = "Search for movie" 
                    value= {searchTerm}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <img
                    src={SearchIcon} 
                    alt= "Search"
                    onClick={() => searchTermMovies(searchTerm)}
                />


            </div>
           
           { movies.length>0 ? 
            (
                <div className="container">
                    {/* <MovieCard movies1 = {movies[0]}/> */}

                    {movies.map( (movie)=> (
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

    );
}

export default Home;