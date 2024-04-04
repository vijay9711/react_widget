import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_MOVIE_URL;
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class TrendingService{
    getAllGenres = (type) =>{
        const api = `${url}/genre/${type}/list?api_key=${apiKey}`
        return apiHelper.get(api);
    }
    getTrendingMovies = (page,mediaType, genreId) =>{
        let api = ``;
        if(genreId == '' || genreId == 'All'){
            api = `${url}/trending/${mediaType}/day?page=${page}${genreId == '' || genreId == 'All' ? '' : `&with_genres=${genreId}`}&api_key=${apiKey}`;
        }else {
            api = `${url}/discover/${mediaType}?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;
        }
        return apiHelper.get(api); 
    }
    searchMovie = (page,query) =>{
        const api = `${url}/search/movie?language=en-US&query=${query}&page=${page}&size=10&api_key=${apiKey}`
        return apiHelper.get(api);
    }
}
export default TrendingService;