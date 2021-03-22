import axios from 'axios';
import React from 'react';
const APP_URL = process.env.REACT_APP_URL;
const BASE_URL = "";

export class ApiHelper{
    get(uri, data = {}) {
        console.log(APP_URL," url")
        return axios.get(`${process.env.REACT_APP_URL}` + uri, {
            headers:this.getHeaders(),
            withCredentials: false
        })
            .then(this.checkResponse)
            .catch(this.handleError)
    }
    getHeaders(){
        let defaultHeaders = BASE_URL;
        defaultHeaders = {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
            'x-rapidapi-host':process.env.REACT_APP_RAPID_HOST,
            'useQueryString':true,
        }
        return defaultHeaders
    }
    checkResponse(response) {
        return response
    }

    handleError(error) {
        return Promise.reject(error.response)
    }
}
