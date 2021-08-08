import React, { Component } from 'react'
import styled from "styled-components";
// import Button from "../../Widgets/Button/Button.js";
import {TrendingService} from "../../Services/MoviesServices/TrendingService.js";
import Rating from "../../Widgets/Rating/Rating.js";
import { ThemeProvider } from "styled-components";
import MovieDetails from "../../Widgets/MovieDetail/MovieDetails.js";
import Pagination from "../../Widgets/Pagination/Pagination.js";

const trendingService = new TrendingService();

const MovieName = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin:.5rem 0rem;
    color: var(--color-white);
`

class Home extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
        this.state = {
            trendingMovies: [],
            page:1,
            selectedMovieId:"",
            selectedMovieData:"",
            totalPage:1000
        }
    }
    componentDidMount() {
        this.getTrendingMovies(this.state.page);
        console.log("Home")
    }
    getTrendingMovies = (page) => {
        trendingService.getTrendingMovies(page,'movie').then(res=>{
            console.log(res);
            res.data.results.map(item=>{
                console.log(item.media_type)
            })
            this.setState({ trendingMovies: res.data.results })
        }).catch(e=>{
            console.log(e)
        })
    }
    getRatingBG = (rating) =>{
        return {
            bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-white) calc(${rating} / 10 * 100%))`
        }
    }
    getSelectedMovie = (event,movie,index) =>{
        event.preventDefault();
        this.setState({selectedMovieId: movie.id, selectedMovieData: movie});
        console.log(movie,this.selectedMovieData, "selected daaadadqw");
    }
    onPageChange = (page) => {
        console.log(page);
        this.setState({page: page});
        this.getTrendingMovies(page);
    }
    render() {
        // const trendingMovies = this.state.trendingMovie;
        const selectedMovieId = this.state.selectedMovieId; 
        const selectedMovieData = this.state.selectedMovieData; 
        const state = this.state;
        console.log(state.trendingMovies, " trandinpnnn;nnn;nn;n;n;nn;n;g")
        return (
            <div className="">
                {selectedMovieId === "" ? 
                <div className="flex flex-wrap justify-between overflow-hidden sm:-mx-2 lg:-mx-2 xl:-mx-2">
                    <div className="w-full">
                        <Pagination currentPage={state.page} onPageChange={this.onPageChange} totalPage={state.totalPage}></Pagination>
                    </div>
                    {state.trendingMovies.map((movies,index)=>{
                        return(
                            <div key={index} onClick={(event)=>this.getSelectedMovie(event,movies,index)} className="group bg-main rounded-2xl shadow:lg border-1 overflow-hidden lg:w-1/5 md:w-1/4 sm:w-50 m-10 cursor-pointer hover:shadow-mainColorShadow duration-500">
                                <img className="w-full h-6/6 object-cover rounded-lg shadow-xl" src={process.env.REACT_APP_IMAGE_URL+movies.poster_path} alt="Man looking at item at a store" />
                                
                                <div className="p-5">
                                    <ThemeProvider theme={this.getRatingBG(movies.vote_average)}>
                                        <Rating id={index+'rating'}/>
                                    </ThemeProvider>
                                    <span className="text-lg float-right font-bold text-white group-hover:text-xl group-hover:font-bold">{movies.vote_average}</span>
                                </div>
                                <p className="px-5 py-3 font-medium text-lg text-white group-hover:text-xl group-hover:font-bold">{movies.original_title}</p>
                            </div>
                            // <div className="bg-white p-5 lg:w-1/4 m-4 shadow:lg">
                            //     <img class="w-1/2 h-1/1 object-cover rounded-lg shadow-xl" src={process.env.REACT_APP_IMAGE_URL+movies.poster_path} alt="Man looking at item at a store" />
                            // </div>
                        )
                    })}
                </div>
                :
                <MovieDetails movieData={selectedMovieData}></MovieDetails>
                }                
            </div>
        )
    }
}

export default Home