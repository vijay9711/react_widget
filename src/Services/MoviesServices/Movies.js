import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_MOVIE_URL;
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class Movies{
    getAllGenres = () =>{
        const api = `${url}/genre/movie/list?api_key=${apiKey}`
        return apiHelper.get(api);
    }
    getTrandingMovies = (page) =>{
        const api = `${url}/trending/movie/day?api_key=${apiKey}&page=${page}&size=10`
        return apiHelper.get(api); 
    }
}
export default Movies;