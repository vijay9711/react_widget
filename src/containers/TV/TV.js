import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types'
import {TrendingService} from "../../Services/MoviesServices/TrendingService.js";
import Rating from "../../Widgets/Rating/Rating.js";
import { ThemeProvider } from "styled-components";

const trendingService = new TrendingService;
const MovieName = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin:.5rem 0rem;
    color: var(--color-white);
`
export class ToDo extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            page: 1,
            trendingTvShows:[]
        }
    }
    componentDidMount(){
        trendingService.getTrendingMovies(this.state.page,'tv').then(res=>{
            res.data.results.map(item=>{
                console.log(item.media_type)
            })
            this.setState({ trendingTvShows: res.data.results })
        })
    }
    getRatingBG = (rating) =>{
        return {
            bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-white) calc(${rating} / 10 * 100%))`
        }
    }
    getSelectedMovie = (event,movie,index) =>{
        event.preventDefault();
        console.log(movie.media_type, index);
    }
    render() {
        const trendingTvShows = this.state.trendingTvShows;  
        console.log(trendingTvShows, " tranding")
        return (
            <div className="flex flex-wrap justify-between overflow-hidden sm:-mx-2 lg:-mx-2 xl:-mx-2">
                {trendingTvShows.map((movies,index)=>{
                    return(
                        <div onClick={(event)=>this.getSelectedMovie(event,movies,index)} className="group bg-main rounded-2xl shadow:lg border-1 overflow-hidden lg:w-1/5 md:w-1/4 sm:w-50 m-10 cursor-pointer hover:shadow-mainColorShadow hover:bg-white duration-500">
                            <img className="w-full h-6/6 object-cover rounded-lg shadow-xl" src={process.env.REACT_APP_IMAGE_URL+movies.poster_path} alt="Man looking at item at a store" />
                            <div className="p-5">
                                <ThemeProvider theme={this.getRatingBG(movies.vote_average)}>
                                    <Rating id={index+'rating'}/>
                                </ThemeProvider>
                                <span className="text-xl float-right font-bold text-white group-hover:text-main group-hover:font-bold">{movies.vote_average}</span>
                            </div>
                            <p className="px-5 py-3 font-medium text-lg text-white group-hover:text-main group-hover:font-bold">{movies.original_title}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ToDo