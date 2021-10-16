import * as actionTypes from "./ActionTypes";
import axios from "axios";
import { initialState } from "../reducers/initialState";



export const getBasitKurpData=(data)=>{
    return {
        type:actionTypes.BASITKURP,
        payload:data
    }
}

export const getBasitKurpDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/basitkurp";
            const response= await axios.post(url,data,config);
            const result=response.data;
            console.log(response);

            const Fles=Math.round(100*result.f)/100;
            const Dever_A=Math.round(100*result.d[0])/100;
            const Dever_B=Math.round(100*result.d[1])/100;
            const Indirme=Math.round(100*result.i)/100;
            const Status=response.status;
           

            const resultData={
                Fles,
                Dever_A,
                Dever_B,
                Indirme,
                Status,
            };

            return dispatch(getBasitKurpData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getBasitKurpData(initialState.apiData))
            }
            console.error("Axios error: ", e.response);
            initialState.apiData.Status=e.response.status;
            console.log(initialState.apiData.Status);
            return dispatch(getBasitKurpData(initialState.apiData))
        } 
    }
}

export const getKisaDevelopmanliKurpData=(data)=>{
    return {
        type:actionTypes.KISADEVELOPMANLIKURP,
        payload:data
    }
}

export const getKisaDevelopmanliKurpDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };   
            
            const url = "http://localhost:8312/kisadevelopmanlikurp";
            const response= await axios.post(url,data,config);
            const result=response.data;
            console.log(response);

            const Fles=Math.round(100*result.f)/100;
            const Dever_A=Math.round(100*result.d[0])/100;
            const Dever_B=Math.round(100*result.d[1])/100;
            const Indirme=Math.round(100*result.i)/100;
            const Status=response.status;
        
            const resultData={
                Fles,
                Dever_A,
                Dever_B,
                Indirme,
                Status,
            }

            console.log(resultData)

            return dispatch(getKisaDevelopmanliKurpData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getKisaDevelopmanliKurpData(initialState.apiData))
            }
            console.error("Axios error: ", e.response.status);
            initialState.apiData.Status=e.response.status;
            return dispatch(getKisaDevelopmanliKurpData(initialState.apiData))
        } 
    }
}

export const getParabolsuzKurpData=(data)=>{
    return {
        type:actionTypes.PARABOLSUZKURP,
        payload:data
    }
}

export const getParabolsuzKurpDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/parabolsuzkurp";
            const response= await axios.post(url,data,config);
            const result=response.data;
            console.log(response);

            const Fles=Math.round(100*result.f)/100;
            const Dever_A=Math.round(100*result.d[0])/100;
            const Dever_B=Math.round(100*result.d[1])/100;
            const Indirme=Math.round(100*result.i)/100;
            const Status=response.status;
           

            const resultData={
                Fles,
                Dever_A,
                Dever_B,
                Indirme,
                Status,
            };

            return dispatch(getParabolsuzKurpData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getParabolsuzKurpData(initialState.apiData))
            }
            console.error("Axios error: ", e.response);
            initialState.apiData.Status=e.response.status;
            console.log(initialState.apiData.Status);
            return dispatch(getParabolsuzKurpData(initialState.apiData))
        } 
    }
}

export const getSKurpData=(data)=>{
    return {
        type:actionTypes.SKURP,
        payload:data
    }
}

export const getSKurpDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/skurp";
            const response= await axios.post(url,data,config);
            const result=response.data;
            console.log(response);

            const Fles=Math.round(100*result.f)/100;
            const Dever_A=Math.round(100*result.d[0])/100;
            const Dever_B=Math.round(100*result.d[1])/100;
            const Indirme=Math.round(100*result.i)/100;
            const Status=response.status;
           

            const resultData={
                Fles,
                Dever_A,
                Dever_B,
                Indirme,
                Status,
            };
            
            return dispatch(getSKurpData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getSKurpData(initialState.apiData))
            }
            console.error("Axios error: ", e.response);
            initialState.apiData.Status=e.response.status;
            console.log(initialState.apiData.Status);
            return dispatch(getSKurpData(initialState.apiData))
        } 
    }
}

export const getSepetKurpData=(data)=>{
    return {
        type:actionTypes.SEPETKURP,
        payload:data
    }
}

export const getSepetKurpDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/sepetkurp";
            const response= await axios.post(url,data,config);
            const result=response.data;
            console.log(response);

            const Fles=Math.round(100*result.f)/100;
            const Dever_A=Math.round(100*result.d[0])/100;
            const Dever_B=Math.round(100*result.d[1])/100;
            const Indirme=Math.round(100*result.i)/100;
            const Status=response.status;
           

            const resultData={
                Fles,
                Dever_A,
                Dever_B,
                Indirme,
                Status,
            };

            return dispatch(getSepetKurpData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getSepetKurpData(initialState.apiData))
            }
            console.error("Axios error: ", e.response);
            initialState.apiData.Status=e.response.status;
            console.log(initialState.apiData.Status);
            return dispatch(getSepetKurpData(initialState.apiData))
        } 
    }
}

export const getBasitKurpChartData=(data)=>{
    return {
        type:actionTypes.BASITKURPCHART,
        payload:data
    }
}

export const getBasitKurpChartDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/basitkurpgrafik";
            const response= await axios.post(url,data,config);
            const result=response.data.fles;
            console.log(response);
            const Status=response.status;
           

            const resultData={
                ChartData : result,
                ChartStatus : Status
            };

     

            return dispatch(getBasitKurpChartData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getBasitKurpChartData(initialState.chartData))
            }
            console.error("Axios error: ", e.response);
            initialState.chartData.ChartStatus=e.response.status;
            console.log(initialState.chartData.ChartStatus);
            return dispatch(getBasitKurpChartData(initialState.chartData))
        } 
    }
}

export const getKisaDevelopmanliKurpChartData=(data)=>{
    return {
        type:actionTypes.KISADEVELOPMANLIKURPCHART,
        payload:data
    }
}

export const getKisaDevelopmanliKurpChartDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/kisadevelopmanlikurpgrafik";
            const response= await axios.post(url,data,config);
            const result=response.data.fles;
            console.log(response);
            const Status=response.status;
           

            const resultData={
                ChartData : result,
                ChartStatus : Status
            };

     

            return dispatch(getKisaDevelopmanliKurpChartData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getKisaDevelopmanliKurpChartData(initialState.chartData))
            }
            console.error("Axios error: ", e.response);
            initialState.chartData.ChartStatus=e.response.status;
            console.log(initialState.chartData.ChartStatus);
            return dispatch(getKisaDevelopmanliKurpChartData(initialState.chartData))
        } 
    }

    
}

export const getParabolsuzKurpChartData=(data)=>{
    return {
        type:actionTypes.PARABOLSUZKURPCHART,
        payload:data
    }
}

export const getParabolsuzKurpChartDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/parabolsuzkurpgrafik";
            const response= await axios.post(url,data,config);
            const result=response.data.fles;
            console.log(response);
            const Status=response.status;
           

            const resultData={
                ChartData : result,
                ChartStatus : Status
            };

     

            return dispatch(getParabolsuzKurpChartData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getParabolsuzKurpChartData(initialState.chartData))
            }
            console.error("Axios error: ", e.response);
            initialState.chartData.ChartStatus=e.response.status;
            console.log(initialState.chartData.ChartStatus);
            return dispatch(getParabolsuzKurpChartData(initialState.chartData))
        } 
    }
}

export const getSKurpChartData=(data)=>{
    return {
        type:actionTypes.SKURPCHART,
        payload:data
    }
}

export const getSKurpChartDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/skurpgrafik";
            const response= await axios.post(url,data,config);
            const result=response.data.fles;
            console.log(response);
            const Status=response.status;
           

            const resultData={
                ChartData : result,
                ChartStatus : Status
            };

     

            return dispatch(getSKurpChartData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getSKurpChartData(initialState.chartData))
            }
            console.error("Axios error: ", e.response);
            initialState.chartData.ChartStatus=e.response.status;
            console.log(initialState.chartData.ChartStatus);
            return dispatch(getSKurpChartData(initialState.chartData))
        } 
    }

    
}

export const getSepetKurpChartData=(data)=>{
    return {
        type:actionTypes.SEPETKURPCHART,
        payload:data
    }
}

export const getSepetKurpChartDataFromApi=(data)=>{

    return async function(dispatch){

        try{

            const config={
                headers: {
                'Content-Type': 'application/json'
                }
            };
            
            const url = "http://localhost:8312/sepetkurpgrafik";
            const response= await axios.post(url,data,config);
            const result=response.data.fles;
            console.log(response);
            const Status=response.status;
           

            const resultData={
                ChartData : result,
                ChartStatus : Status
            };

     

            return dispatch(getSepetKurpChartData(resultData));

        }
        catch(e){
            if(e.response===undefined){
                return dispatch(getSepetKurpChartData(initialState.chartData))
            }
            console.error("Axios error: ", e.response);
            initialState.chartData.ChartStatus=e.response.status;
            console.log(initialState.chartData.ChartStatus);
            return dispatch(getSepetKurpChartData(initialState.chartData))
        } 
    }

    
}




