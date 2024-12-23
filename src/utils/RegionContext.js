import React, { useReducer, createContext, useContext } from "react";
import { useEffect } from "react";
import {CommonService} from "../Services/commonService";
const commonService = new CommonService();



function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return { countryCode: action.payload.countryCode, selectedMediaId: action.payload.selectedMediaId, mediaType: action.payload.mediaType }
    case 'clear':
      return { countryCode:'', selectedMediaId:'', mediaType:''};
    default:
      return state;
  }
}

const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { countryCode:'' , selectedMediaId:'', mediaType:''});
  useEffect(()=>{
    commonService.getUserRegion().then((res)=>{
      if(res.data){
        let payload = { countryCode:res.data.country_code, selectedMediaId:'', mediaType:''}
        dispatch({type:'update', payload:payload});
      }
    }).catch(err=>{
      console.log(err);
    })
    
  },[]);
  return (
    <RegionContext.Provider value={{ state, dispatch }}>
      {children}
    </RegionContext.Provider>
  )
}

export const useRegionContext = () => {
  return useContext(RegionContext);
}