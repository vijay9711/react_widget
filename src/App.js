import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./hoc/layout/Layout.js";
import Home from "./containers/Home/Home";
import TV from "./containers/TV/TV";
import About from "./containers/About/About";
import Project from "./containers/Project/Project";
import Contact from "./containers/Contact/Contant";
import Trending from "./containers/Trending/Trending";
import MovieDetails from './Widgets/MovieDetail/MovieDetails.js';
import TvDetails from './Widgets/TvDetails/TvDetails.js';
const App = () => {
    return (
        <Layout>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/trending" replace />} />
                    <Route exact path="/movies" element={<Home />}></Route>
                    <Route exact path='/trending' element={<Trending/>}></Route>
                    <Route exact path="/tv" element={<TV />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/Project" element={<Project />}></Route>
                    <Route exact path="/Contact" element={<Contact />}></Route>
                    <Route exact path="/movie/:id/details" element={<MovieDetails/>}></Route>
                    <Route exact path="/tv/:id/details" element={<TvDetails/>}></Route>
                    <Route path="*" to="/trending"></Route>
                </Routes>
        </Layout>
    )
}
export default App;