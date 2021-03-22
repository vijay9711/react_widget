import React from 'react'
import { ApiHelper } from '../ApiHelper'

const apiHelper = new ApiHelper();

export class COVIDServices{
    getWorlCoviddData = () =>{
        return apiHelper.get('/api');
    }
}
export default COVIDServices;