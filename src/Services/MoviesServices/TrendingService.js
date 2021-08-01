import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_MOVIE_URL;
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class TrendingService{
    getAllGenres = () =>{
        const api = `${url}/genre/movie/list?api_key=${apiKey}`
        return apiHelper.get(api);
    }
    getTrendingMovies = (page,mediaType) =>{
        const api = `${url}/trending/${mediaType}/day?api_key=${apiKey}`
        return apiHelper.get(api); 
    }
}
export default TrendingService;