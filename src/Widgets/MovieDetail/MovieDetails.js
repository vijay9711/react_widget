import { render } from "@testing-library/react";
import styled from "styled-components";
import React, {Component} from "react";
import {MovieService } from "../../Services/MoviesServices/MovieService.js";
const Note = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #ffff00;
    color: #000000;
    font-size: 50px;
    align-items: center;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
`
const movieService = new MovieService
class MovieDetails extends Component{ 
    componentDidMount(){
        console.log(this.props.movieData, "fom props")
        movieService.getMovieDetailById(this.props.movieData.id).then(res=>{
            console.log(res, " movie details");
        })
    }
    render(){
        return(
            <Note className="Note">
                <p>BACK</p>
                <h1>PAGE UNDER CONSTRUCTION</h1>
            </Note>
        )
    }
}
export default MovieDetails;