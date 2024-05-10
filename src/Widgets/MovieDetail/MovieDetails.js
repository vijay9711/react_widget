
import { render } from "@testing-library/react";
import styled from "styled-components";
import React, { Component, useEffect, useState } from "react";
import { MovieService } from "../../Services/MoviesServices/MovieService.js";
import { useParams } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Rating from "../Rating/Rating.js";
import { getRatingBG } from "../../utils/getRatingBg.js";
const Note = styled.div`
    ${'' /* height: 100vh;
    width: 100vw;
    background-color: #ffff00; */}
    ${'' /* color: #000000;
    font-size: 50px; */}
    ${'' /* align-items: center;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    height: 100vh; */}
`
const PosterContent = styled.div`
    
`
const movieService = new MovieService

const MovieDetail = () => {
    const [item, setItem] = useState('');
    const { id } = useParams();
    useEffect(() => {
        getMovieDetails();
    }, []);

    const getMovieDetails = () => {
        movieService.getMovieDetailById(id).then(res => {
            if (res.status == 200) {
                setItem(res.data);
                console.log(res.data);
            } else {
                console.log("something wrong");
            }

        })
    }

    return (
        <Note className="Note p-5">
            <PosterContent className="d-flex grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-1 pb-5 shadow-mainColorShadow p-5 w-4/6 m-auto rounded-lg justify-between">
                <div className="lg:col-span-1 sm:row-span-1 flex">
                    <img className="rounded-lg m-auto" src={process.env.REACT_APP_IMAGE_URL + item.poster_path} alt="poster" />
                </div>
                <div className="lg:col-span-3 sm:row-span-3 text-xl lg:pl-10 sm:p-0 ">
                    <p className="lg:text-title sm:text-4xl  text-textColor font-bold">{item && item.original_title}</p>
                    <div className="flex justify-start items-center">
                        <ThemeProvider theme={getRatingBG(item.vote_average)}>
                            <Rating id={item.id + 'rating'} />
                        </ThemeProvider>
                        <div className="ml-3">
                            {(item && item.vote_average && (item.vote_average.toFixed(1)))}/10
                        </div>
                    </div>
                    <p className="text-md text-textColor">{item && item.overview}</p>
                    <div className="flex">Original Language: <p>{item && item.original_language}</p></div>
                </div>
            </PosterContent>
        </Note>
    )
}

export default MovieDetail;