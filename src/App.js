import React from "react";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Layout from "./component/Layout";
import Movie from "./component/Movie";
import MovieLists from "./component/Movielists";
import Registration from "./component/Registration";
import TestPagination from "./component/TestPagination";

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
                <Route path="page" element={<TestPagination itemsPerPage={4}/>} />
            </Route>
        </Routes>
    </BrowserRouter>

    );
}

export default App;