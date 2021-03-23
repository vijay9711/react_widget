import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();

const url = process.env.REACT_APP_URL;

export class COVIDServices{
    getWorlCoviddData = () =>{
        return apiHelper.get(`${url}/api`);
    }
}
export default COVIDServices;