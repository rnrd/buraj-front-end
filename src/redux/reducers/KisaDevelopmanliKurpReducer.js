import * as actionTypes from "../actions/ActionTypes";
import { initialState } from "../reducers/initialState";

const kisaDevelopmanliKurpReducer=(state=initialState.apiData,action)=>{
    let newState=state;
    if(action.type===actionTypes.KISADEVELOPMANLIKURP){
        newState=action.payload;
        console.log(newState);
        return newState;
    }
    else{
        return newState;
    }
}

export default kisaDevelopmanliKurpReducer;