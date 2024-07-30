import { ApiHelper } from './ApiHelper';
import axios from 'axios';
const apiHelper = new ApiHelper();
const url = process.env.REACT_REGION_API_URL;

export class CommonService{
    getUserRegion(){
      return new Promise((resolve,reject)=>axios.get('https://ipapi.co/json/')
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error);
      }));
    }
}
export default CommonService;