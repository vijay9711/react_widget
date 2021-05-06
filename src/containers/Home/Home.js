import React, { Component } from 'react'
import styled from "styled-components";
// import Button from "../../Widgets/Button/Button.js";
import {Movies} from "../../Services/MoviesServices/Movies.js";
import Rating from "../../Widgets/Rating/Rating.js";
import { ThemeProvider } from "styled-components";

const moviesService = new Movies();

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
            trandingMovie: [],
            page:1
        }
    }
    componentDidMount() {
        moviesService.getTrandingMovies(this.state.page).then(res=>{
            console.log(res);
            this.setState({ trandingMovie: res.data.results })
        }).catch(e=>{
            console.log(e)
        })
        console.log("Home")
    }
    getRatingBG = (rating) =>{
        return {
            bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-white) calc(${rating} / 10 * 100%))`
        }
    }

    render() {
        const trandingMovies = this.state.trandingMovie;  
        console.log(trandingMovies, " tranding")
        return (
            <div className="flex flex-wrap justify-between overflow-hidden sm:-mx-2 lg:-mx-2 xl:-mx-2">
                {trandingMovies.map((movies,index)=>{
                    return(
                        <div class="group bg-main rounded-2xl shadow:lg border-1 overflow-hidden lg:w-1/5 md:w-1/4 sm:w-50 m-10 hover:shadow-mainColorShadow hover:bg-white duration-500">
                            <img class="w-full h-6/6 object-cover rounded-lg shadow-xl" src={process.env.REACT_APP_IMAGE_URL+movies.poster_path} alt="Man looking at item at a store" />
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

export default Home