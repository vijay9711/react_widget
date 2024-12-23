import axios from 'axios';

// const APP_URL = process.env.REACT_APP_URL;
const BASE_URL = "";
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class ApiHelper{
    get(uri) {
        return axios.get( uri, {
            // headers:this.getHeaders(),
            withCredentials: false
        })
            .then(this.checkResponse)
            .catch(this.handleError)
    }
    getHeaders(){
        const defaultHeaders = {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + apiKey
        }
        return defaultHeaders;
    }
    checkResponse(response) {
        return response
    }

    handleError(error) {
        return Promise.reject(error.response)
    }
}
