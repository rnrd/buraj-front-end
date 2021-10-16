import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const sepetKurpReducer=(state=initialState.apiData,action)=>{
    let newState=state;
    if(action.type===actionTypes.SEPETKURP){
        newState=action.payload;
        console.log(newState)
        return newState;
    }
    else{
        return newState;
    }
}

export default sepetKurpReducer;