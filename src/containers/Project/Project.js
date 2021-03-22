import React, { Component } from 'react'
import  {COVIDServices}  from "../../Services/COVID/COVIDServices.js";

const covidServices = new COVIDServices();
export class Project extends Component {
    static propTypes = {

    }
    componentDidMount() {
        covidServices.getWorlCoviddData().then(res=>{
            console.log(res," resposnses dafda")
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