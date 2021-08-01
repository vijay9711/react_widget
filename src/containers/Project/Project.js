import React, { Component } from 'react'
import  {COVIDServices}  from "../../Services/COVID/COVIDServices.js";

const covidServices = new COVIDServices();

export class Project extends Component {
    static propTypes = {
    }
    constructor(props) {
        super(props);
        this.state = {
            genres:[]
        };
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Project