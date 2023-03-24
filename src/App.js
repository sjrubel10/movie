import React from "react";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Movie from "./component/Movie";
import Registration from "./component/Registration";
import MovieLists from "./component/Movielists";
import Layout from "./component/Layout";


// const apikey = '5f711c12';

// console.log(API_URL);
const App = () => {

    // const [moviestitle, setMoviestitle] = useState('');

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="movie/:id" element={<Movie />} />
                <Route path="signup" element={<Registration />} />
                <Route path="lists" element={<MovieLists />} />
            </Route>
        </Routes>
    </BrowserRouter>

    );
}

export default App;