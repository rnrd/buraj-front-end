import {combineReducers} from "redux";
import basitKurpReducer from "./BasitKurpReducer";
import kisaDevelopmanliKurpReducer from "./KisaDevelopmanliKurpReducer";
import parabolsuzKurpReducer from "./ParabolsuzKurpReducer";
import sKurpReducer from "./SKurpReducer";
import sepetKurpReducer from "./SepetKurpReducer";
import basitKurpChartReducer from "./BasitKurpChartReducer";
import kisaDevelopmanliKurpChartReducer from "./KisaDevelopmanliKurpChartReducer";
import parabolsuzKurpChartReducer from "./ParabolsuzKurpChartReducer";
import sKurpChartReducer from "./SKurpChartReducer";
import sepetKurpChartReducer from "./SepetKurpChartReducer";


//we will combine all reducers together for redux by combineReducers function.
const allReducers=combineReducers(
    {
        basitKurpReducer,
        kisaDevelopmanliKurpReducer,
        parabolsuzKurpReducer,
        sKurpReducer,
        sepetKurpReducer,
        basitKurpChartReducer,
        kisaDevelopmanliKurpChartReducer,
        parabolsuzKurpChartReducer,
        sKurpChartReducer,
        sepetKurpChartReducer
    }
);

export default allReducers;