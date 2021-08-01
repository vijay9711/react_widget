import { render } from "@testing-library/react";
import React, {Component} from "react";
import {MovieService } from "../../Services/MoviesServices/MovieService.js";

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
            <div>about movie</div>
        )
    }
}
export default MovieDetails;