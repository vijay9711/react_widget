import React, { Component } from 'react'
import styled from "styled-components";
// import Button from "../../Widgets/Button/Button.js";
import { TrendingService } from "../../Services/MoviesServices/TrendingService.js";
import Rating from "../../Widgets/Rating/Rating.js";
import { ThemeProvider } from "styled-components";
import MovieDetails from "../../Widgets/MovieDetail/MovieDetails.js";
import FilterBar from "../../Widgets/FilterBar/FilterBar.js";
import Loader from '../../Widgets/Loader.js';
import Card from "../../Widgets/Card/card.js";

const trendingService = new TrendingService();

const MovieName = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin:.5rem 0rem;
    color: var(--color-white);
`

class TV extends Component {
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
        trendingService.getAllGenres('tv').then(res => {
            this.setState({ genres: res.data.genres });
        }).catch(e => {
            console.log(e);
        })
    }

    getTrendingMovies = (page, genreId) => {
        this.setState({ loading: true });
        trendingService.getTrendingMovies(page, 'tv', genreId).then(res => {
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
        this.state.page = 1;
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
                    <div className='flex flex-wrap'>
                        <div className="w-full align-items-right">
                            <FilterBar
                                title={"TV"}
                                currentPage={state.page}
                                onPageChange={this.onPageChange}
                                totalPage={state.totalPage}
                                genres={state.genres}
                                selectedGenre={(event) => { this.selectedGenre(event) }}
                                search={(event) => this.searchedText(event, state.page)}
                            />
                        </div>
                        {state.trendingMovies.length > 0 ?
                            <div id='tv-section' className="justify-between overflow-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 lg:pt-32 m-auto sm:pt-56">
                                {state.trendingMovies.map((movie, index) => {
                                    return (
                                        <Card index={index} item={movie} getSelectedItem={this.getSelectedMovie}/>
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

export default TV