import React, { Component } from 'react'
import styled from "styled-components";
// import Button from "../../Widgets/Button/Button.js";
import {TrendingService} from "../../Services/MoviesServices/TrendingService.js";
import Rating from "../../Widgets/Rating/Rating.js";
import { ThemeProvider } from "styled-components";
import MovieDetails from "../../Widgets/MovieDetail/MovieDetails.js";
import FilterBar from "../../Widgets/FilterBar/FilterBar.js";
import NoMovies from "../../assets/movies/noMovies.svg"

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
            totalPage:1000,
            searchQuery:'',
            genres:[]
        }
    }
    componentDidMount() {
        this.getAllGenres();
        this.getTrendingMovies(this.state.page);
    }
    getAllGenres = () => {
        trendingService.getAllGenres().then(res=>{
            console.log(res, "all genres");
            this.setState({genres:res.data.genres})

        }).catch(e=>{
            console.log(e);
        })
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
        console.log(page, this.state.searchQuery);
        this.setState({page: page});
        if(this.state.searchQuery){
            this.searchedText(this.state.searchQuery,page);
        }else{
            this.getTrendingMovies(page);
        }
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    searchedText=(query,page)=>{
        console.log(query, "query");
        this.setState({searchQuery: query});
        if(query){
            trendingService.searchMovie(page, query).then(res=>{
                console.log(res, " serach result")
                this.setState({ trendingMovies: res.data.results })
            }).catch(e=>{
                console.log(e);
                this.setState({trendingMovies:[]})
            })
        }else{
            this.getTrendingMovies(this.state.page);
        }
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
                <div >
                    {/* <div className="w-full align-items-right ">
                        <div className="h-32 w-sm-6/6 w-lg-1/6  ml-auto">
                            <div className="ml-auto fixed">
                                <Pagination  currentPage={state.page} onPageChange={this.onPageChange} totalPage={state.totalPage}></Pagination>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="h-32"> */}
                        <FilterBar 
                            currentPage={state.page} 
                            onPageChange={this.onPageChange} 
                            totalPage={state.totalPage}
                            genres={state.genres}
                            search={(event)=>this.searchedText(event,state.page)}
                        />
                    {/* </div> */}
                    {state.trendingMovies.length > 0 ? 
                    <div id='movie-section' className="flex flex-wrap justify-between overflow-hidden sm:-mx-2 lg:-mx-2 xl:-mx-2 pt-36">
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
                            )
                        })}
                    </div>:
                    <img className="m-auto" src={NoMovies}></img>
                    }
                </div>
                :
                <MovieDetails movieData={selectedMovieData}></MovieDetails>
                }                
            </div>
        )
    }
}

export default Home