import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_MOVIE_URL;
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class TrendingService{
    getAllGenres = () =>{
        const api = `${url}/genre/movie/list?api_key=${apiKey}`
        return apiHelper.get(api);
    }
    getTrendingMovies = (page,mediaType, size, genreId) =>{
        const api = `${url}/trending/${mediaType}/day?api_key=${apiKey}&page=${page}&size=${size}&with_genres=${genreId}`
        return apiHelper.get(api); 
    }
    searchMovie = (page,query) =>{
        const api = `${url}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&size=10`
        return apiHelper.get(api);
    }
}
export default TrendingService;