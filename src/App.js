import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./hoc/layout/Layout.js";
// import Home from "./containers/Home/Home";
// import TV from "./containers/TV/TV";
// import About from "./containers/About/About";
// import Project from "./containers/Project/Project";
// import Contact from "./containers/Contact/Contant";
// import Trending from "./containers/Trending/Trending";
// import MovieDetails from './Widgets/MovieDetail/MovieDetails.js';
// import TvDetails from './Widgets/TvDetails/TvDetails.js';
import Loading from "./containers/Loading/Loading.js";
import { RegionProvider, useRegionContext } from './utils/RegionContext.js';
import CommonService from './Services/commonService.js';
// import Loader from './Widgets/Loader.js';
const commonService = new CommonService;

const Home = lazy(() => import('./containers/Home/Home'));
const TV = lazy(() => import('./containers/TV/TV'));
const About = lazy(() => import('./containers/About/About'));
const Project = lazy(() => import('./containers/Project/Project'));
const Contact = lazy(() => import('./containers/Contact/Contant'));
const Trending = lazy(() => import('./containers/Trending/Trending.js'));
const MovieDetails = lazy(() => import('./Widgets/MovieDetail/MovieDetails'));
const TvDetails = lazy(() => import('./Widgets/TvDetails/TvDetails'));
const CardList = lazy(()=>import('./Widgets/cardList.js'));
const App = () => {

    return (
        <Layout>
            <RegionProvider>
                <Routes >
                    <Route exact path="/" element={<Suspense fallback={<Loading/>}><Navigate to="/trending" replace /></Suspense>} />
                    <Route exact path='/trending' element={<Suspense fallback={<Loading />}><Trending /></Suspense>}></Route>
                    <Route exact path="/movies" element={<Suspense fallback={<Loading />}><Home /></Suspense>}></Route>
                    <Route exact path="/tv" element={<Suspense fallback={<Loading />}><TV /></Suspense>}></Route>
                    <Route exact path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>}></Route>
                    <Route exact path="/Project" element={<Suspense fallback={<Loading />}><Project /></Suspense>}></Route>
                    <Route exact path="/Contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route>
                    <Route exact path="/movie/:id/details" element={<Suspense fallback={<Loading />}><MovieDetails /></Suspense>}></Route>
                    <Route exact path="/tv/:id/details" element={<Suspense fallback={<Loading />}><TvDetails /></Suspense>}></Route>
                    <Route path="*" to="/trending"></Route>


                    <Route exact path='/test' element={<Suspense fallback={<Loading />}><CardList /></Suspense>}></Route>
                </Routes>
            </RegionProvider>
        </Layout>
    )
}
export default App;