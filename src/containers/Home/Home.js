import React, { Component } from 'react'
import styled from "styled-components";
import Button from "../../Widgets/Button/Button.js";
import {Movies} from "../../Services/MoviesServices/Movies.js";


const moviesService = new Movies();

const Wrapper = styled.div`
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`
class Home extends Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
        this.state = {
            trandingMovie: []
        }
    }
    componentDidMount() {
        moviesService.getTrandingMovies().then(res=>{
            console.log(res);
            this.setState({ trandingMovie: res.data.results })
        }).catch(e=>{
            console.log(e)
        })
        console.log("Home")
    }
    

    render() {
        const trandingMovies = this.state.trandingMovie;  
        console.log(trandingMovies, " tranding")
        return (
            <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 lg:-mx-2 xl:-mx-2">
                {trandingMovies.map(movies=>{
                    return(
                        <div class="bg-white rounded-xl border-1 shadow-lg overflow-hidden h-100 lg:w-1/5 md:w-1/4 sm:w-50 m-10">
                            <div class="md:flex p-3">
                                <div class="">
                                    <img class="w-full h-100 object-cover rounded-lg shadow-sm" src={process.env.REACT_APP_IMAGE_URL+movies.poster_path} alt="Man looking at item at a store" />
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Home