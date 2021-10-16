import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const basitKurpReducer=(state=initialState.apiData,action)=>{
    let newState=state;
    if(action.type===actionTypes.BASITKURP){
        newState=action.payload;
        console.log(newState)
        return newState;
    }
    else{
        return newState;
    }
}

export default basitKurpReducer;