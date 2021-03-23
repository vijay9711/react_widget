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
export class Home extends Component {
    static propTypes = {

    }
    componentDidMount() {
        moviesService.getTrandingMovies().then(res=>{
            console.log(res);
        }).catch(e=>{
            console.log(e)
        })
        console.log("Home")
    }
    

    render() {
        return (
            <div>
                    
            </div>
        )
    }
}

export default Home