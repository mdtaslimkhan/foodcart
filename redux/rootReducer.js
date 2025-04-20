import { combineReducers } from "redux";
import DashListReducer from "./slices/dashSlice";
import FabouriteListReducer from "./slices/fabourite";


export default combineReducers({
    DashListReducer,
    FabouriteListReducer
});