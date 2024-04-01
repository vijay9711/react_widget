import React, { Component } from 'react'
import styled from "styled-components";
// import Button from "../../Widgets/Button/Button.js";
import { TrendingService } from "../../Services/MoviesServices/TrendingService.js";
import Rating from "../../Widgets/Rating/Rating.js";
import { ThemeProvider } from "styled-components";
import MovieDetails from "../../Widgets/MovieDetail/MovieDetails.js";
import FilterBar from "../../Widgets/FilterBar/FilterBar.js";
import NoMovies from "../../assets/movies/noMovies.svg"
import Loader from '../../Widgets/Loader.js';

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
            page: 1,
            selectedMovieId: "",
            selectedMovieData: "",
            totalPage: 1000,
            searchQuery: '',
            genres: [],
            loading: false,
            genreId: ''
        }
    }
    componentDidMount() {
        this.getAllGenres();
        this.getTrendingMovies(this.state.page, this.state.genreId);
    }
    getAllGenres = () => {
        trendingService.getAllGenres().then(res => {
            console.log(res, "all genres");
            this.setState({ genres: res.data.genres });
        }).catch(e => {
            console.log(e);
        })
    }

    getTrendingMovies = (page, genreId) => {
        this.setState({ loading: true });
        trendingService.getTrendingMovies(page, 'movie', 20, genreId).then(res => {
            this.setState({ trendingMovies: res.data.results })
            this.setState({ loading: false });
        }).catch(e => {
            console.log(e);
            this.setState({ loading: false });
        })
    }
    getRatingBG = (rating) => {
        return {
            bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-white) calc(${rating} / 10 * 100%))`
        }
    }
    getSelectedMovie = (event, movie, index) => {
        event.preventDefault();
        this.setState({ selectedMovieId: movie.id, selectedMovieData: movie });
        console.log(movie, this.selectedMovieData, "selected daaadadqw");
    }
    onPageChange = (page) => {
        this.setState({ page: page });
        if (this.state.searchQuery) {
            this.searchedText(this.state.searchQuery, page);
        } else {
            this.getTrendingMovies(page, this.state.genreId);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    selectedGenre = (genreId) => {
        console.log(genreId, " from home ");
        this.setState({ genreId: genreId });
        this.getTrendingMovies(this.state.page, genreId);
    }
    searchedText = (query, page) => {
        console.log(query, "query");
        this.setState({ searchQuery: query });
        if (query) {
            trendingService.searchMovie(page, query).then(res => {
                this.setState({ trendingMovies: res.data.results })
            }).catch(e => {
                console.log(e);
                this.setState({ trendingMovies: [] })
            })
        } else {
            this.getTrendingMovies(this.state.page, this.state.genreId);
        }
    }
    render() {
        const selectedMovieId = this.state.selectedMovieId;
        const selectedMovieData = this.state.selectedMovieData;
        const state = this.state;
        return (
            <div className="">
                {
                    this.state.loading ? <Loader /> : null
                }

                {selectedMovieId === "" ?
                    <div className='px-5'>
                        <div className="w-full align-items-right">
                            <FilterBar
                                currentPage={state.page}
                                onPageChange={this.onPageChange}
                                totalPage={state.totalPage}
                                genres={state.genres}
                                selectedGenre={(event) => { this.selectedGenre(event) }}
                                search={(event) => this.searchedText(event, state.page)}
                            />
                        </div>
                        {state.trendingMovies.length > 0 ?
                            <div id='movie-section' className="justify-between overflow-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 pt-24">
                                {state.trendingMovies.map((movies, index) => {
                                    return (
                                        <div key={index} onClick={(event) => this.getSelectedMovie(event, movies, index)} className="group bg-main rounded-2xl shadow:lg border-1 overflow-hidden m-5 cursor-pointer hover:shadow-mainColorShadow duration-500">
                                            <img className="w-full rounded-lg shadow-xl" src={process.env.REACT_APP_IMAGE_URL + movies.poster_path} alt="poster" />
                                            <div className="p-5">
                                                <ThemeProvider theme={this.getRatingBG(movies.vote_average)}>
                                                    <Rating id={index + 'rating'} />
                                                </ThemeProvider>
                                                <span className="text-lg float-right font-bold text-white group-hover:text-xl group-hover:font-bold">{movies.vote_average}</span>
                                            </div>
                                            <p className="px-5 py-3 font-medium text-lg truncate text-white group-hover:text-xl group-hover:font-bold">{movies.original_title}</p>
                                        </div>
                                    )
                                })}
                            </div> :
                            <div className='w-screen h-screen flex flex-col relative'>
                                <iframe className='m-auto' src="https://lottie.host/embed/9e937372-61ff-4bc0-8227-dea43845f9b3/P0VSYOQtpM.json"></iframe>
                            </div>

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