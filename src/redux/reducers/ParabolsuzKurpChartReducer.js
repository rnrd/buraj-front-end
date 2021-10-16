import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const parabolsuzKurpChartReducer=(state=initialState.chartData,action)=>{
    let newState=state;
    if(action.type===actionTypes.PARABOLSUZKURPCHART){
        newState=action.payload;
        console.log(newState)
        return newState;
    }
    else{
        return newState;
    }
}

export default parabolsuzKurpChartReducer;