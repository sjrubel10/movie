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
import EditList from "./component/Editlists";
import CreateMovie from "./component/CreateMovie";
import EditMovie from "./component/EditMovie";
import CreateQuizForm from "./component/CreateQuizForm";

import UploadMovie from "./component/UploadMovie";

import WpApiData from "./component/Wp_api_data";

import Slideshow from "./component/Slideshow";
// const apikey = '5f711c12';AddNewHtml CreateQuizForm Wp_api_data Slideshow

// console.log(API_URL);
const App = () => {

    // const [moviestitle, setMoviestitle] = useState(''); UploadMovie

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
                    <Route path="edit/:id" element={<EditList />} />
                    <Route path="creeatemovie" element={<CreateMovie />} />
                    <Route path="editmovie" element={<EditMovie />} />

                    <Route path="createquiz" element={<CreateQuizForm />} />

                    <Route path="uploadmovie" element={<UploadMovie />} />

                    <Route path="wpapi" element={<WpApiData />} />

                    <Route path="slidshow" element={<Slideshow />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;