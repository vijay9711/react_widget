import React, { Component } from 'react'
import  {COVIDServices}  from "../../Services/COVID/COVIDServices.js";
import {Movies} from "../../Services/MoviesServices/Movies.js";

const covidServices = new COVIDServices();
const moviesService = new Movies();

export class Project extends Component {
    static propTypes = {
    }
    constructor(props) {
        super(props);
        this.state = {
            genres:[]
        };
      }
    componentDidMount() {
        // covidServices.getWorlCoviddData().then(res=>{
        //     console.log(res," resposnses dafda")
        // }).catch(e=>{
        //     console.log(e)
        // })
        moviesService.getAllGenres().then(res=>{
            console.log(res);
            this.state.genres = res.data.genres
        }).catch(e=>{
            console.log(e)
        })
        console.log("Project")
    }
    

    render() {
        return (
            <div>
                   {this.state.genres.map(genre=>{
                       return(
                           <p>{genre.name}</p>
                       )
                   })}
            </div>
        )
    }
}

export default Project