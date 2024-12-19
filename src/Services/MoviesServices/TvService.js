import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_MOVIE_URL;
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export class TvService{
    getTvShowDetailById(tv_id){
        const api = `${url}/tv/${tv_id}?api_key=${apiKey}`
        return apiHelper.get(api);
    }

    getTvWatchProviderById(tv_id){
        const api = `${url}/tv/${tv_id}/watch/providers?api_key=${apiKey}`
        return apiHelper.get(api);
    }

    getEpisodesBySeriesIdAndSeasonNo(series_id, season_number){
        const api = `${url}/tv/${series_id}/season/${season_number}?api_key=${apiKey}`;
        return apiHelper.get(api);
    }
}
export default TvService;