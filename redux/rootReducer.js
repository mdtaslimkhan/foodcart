import { combineReducers } from "redux";
import DashListReducer from "./slices/dashSlice";
import FabouriteListReducer from "./slices/fabourite";
import CartListReducer from "./slices/cartlist";


export default combineReducers({
    DashListReducer,
    FabouriteListReducer,
    CartListReducer
});