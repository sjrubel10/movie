// import React from "react";

// const [searchTerm, setsearchTerm] = useState('');

const API_URL = 'https://www.omdbapi.com?apikey=5f711c12';

const searchMovies = async (title) => {

    // const [movie, setMovies] = useState([]);

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data);

    return data.Search;
}

 const get_movie = async ( IMDbId ) => {

    const fetchUrl = `${API_URL}&i=${IMDbId}`;

    const response = await fetch(fetchUrl);
    const movie_data = await response.json();

    console.log(movie_data);

    return movie_data;

}

 export { searchMovies, get_movie } 