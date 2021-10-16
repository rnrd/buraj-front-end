import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const sepetKurpChartReducer=(state=initialState.chartData,action)=>{
    let newState=state;
    if(action.type===actionTypes.SEPETKURPCHART){
        newState=action.payload;
        console.log(newState)
        return newState;
    }
    else{
        return newState;
    }
}

export default sepetKurpChartReducer;