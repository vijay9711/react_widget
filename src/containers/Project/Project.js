import React, { Component } from 'react'
import  {COVIDServices}  from "../../Services/COVID/COVIDServices.js";
import {Movies} from "../../Services/MoviesServices/Movies.js";

const covidServices = new COVIDServices();
const moviesService = new Movies();

export class Project extends Component {
    static propTypes = {

    }
    componentDidMount() {
        // covidServices.getWorlCoviddData().then(res=>{
        //     console.log(res," resposnses dafda")
        // }).catch(e=>{
        //     console.log(e)
        // })
        moviesService.getAllGenres().then(res=>{
            console.log(res);
        }).catch(e=>{
            console.log(e)
        })
        console.log("Project")
    }
    

    render() {
        return (
            <div>
                    
            </div>
        )
    }
}

export default Project