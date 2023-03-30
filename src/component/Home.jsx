import React, { useEffect, useState, useRef } from "react";

import MovieCard from '../MovieCard';
import SearchIcon from '../search.svg';
import { searchMovies } from './SearchMovies';


const Home = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setsearchTerm] = useState('');

    const [loader, setLoader] = useState(true);

    const [isempty, setIsempty] = useState(false);

    // console.log( movies );

    // const get_movie = async ( IMDbId ) => {
    //     const response = await fetch(`${API_URL}&i=${IMDbId}`);
    //     const movie_data = await response.json();
    // }

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
      };


    useEffect(() => {

        searchMovies('Spiderman').then(data=> {

            setMovies(data)
            setLoader(false)
            if(data.length<1){
                setIsempty(true);
            }
        });
        // Wp_api_data();
    
    }, [] );

    const searchTermMovies = (term) => {

        setIsempty(false);
        if( term === '') {

            setLoader(false)
            focusInput();

        } else {
            setLoader(true)
            searchMovies(term).then(data=> {
                setMovies(data)
                setLoader(false)

                if(data.length<1){
                    setIsempty(true);
                }
            });

        }
       
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

      const elementStyle = {
        display: loader ? "block" : "none",
      };


      const isEmptyStyle = {
        display: isempty ? "block" : "none",
      };

    return (

        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                    placeholder = "Search for movie" 
                    value= {searchTerm}
                    ref={inputElement}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <img
                    src={SearchIcon} 
                    alt= "Search"
                    onClick={() => searchTermMovies(searchTerm)}
                />


            </div>

            <div style={elementStyle} className="loadinggif" >
                Loading...
            </div>
           
           
                <div className="container">
                    {/* <MovieCard movies1 = {movies[0]}/> */}

                    {movies.map( (movie)=> (
                        <MovieCard movies1 = {movie} key= {Math.random()}/>
                    ))}

                </div>
            
                <div style={isEmptyStyle} className="emptydata">
                    <h2 className="emptytext"> No Movies Found</h2>
                </div>
            
           

        </div>

    );
}

export default Home;