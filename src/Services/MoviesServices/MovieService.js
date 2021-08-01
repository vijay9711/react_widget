import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_MOVIE_URL;
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class MovieService{
    getMovieDetailById(movie_id){
        const api = `${url}/movie/${movie_id}?api_key=${apiKey}`
        return apiHelper.get(api);
    }
}
export default MovieService;