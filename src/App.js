import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/layout/Layout.js";
import Home from "./containers/Home/Home";
import TV from "./containers/TV/TV";
import About from "./containers/About/About";
import Project from "./containers/Project/Project";
import Contact from "./containers/Contact/Contant";
import Trending from "./containers/Trending/Trending";

const App = () => {
    return (
        <Layout>
                <Routes>
                    <Route path="/movies" element={<Home />}></Route>
                    <Route path='/' element={<Trending/>}></Route>
                    <Route path="/tv" element={<TV />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/Project" element={<Project />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="*" to="/"></Route>
                </Routes>
        </Layout>
    )
}
export default App;