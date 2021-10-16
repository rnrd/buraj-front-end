import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const parabolsuzKurpReducer=(state=initialState.apiData,action)=>{
    let newState=state;
    if(action.type===actionTypes.PARABOLSUZKURP){
        newState=action.payload;
        console.log(newState)
        return newState;
    }
    else{
        return newState;
    }
}

export default parabolsuzKurpReducer;