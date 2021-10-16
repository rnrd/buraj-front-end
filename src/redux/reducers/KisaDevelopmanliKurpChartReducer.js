import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const kisaDevelopmanliKurpChartReducer=(state=initialState.chartData,action)=>{
    let newState=state;
    if(action.type===actionTypes.KISADEVELOPMANLIKURPCHART){
        newState=action.payload;
        console.log(newState)
        return newState;
    }
    else{
        return newState;
    }
}

export default kisaDevelopmanliKurpChartReducer;