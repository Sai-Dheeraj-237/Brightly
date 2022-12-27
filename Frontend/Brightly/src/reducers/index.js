import {combineReducers} from "redux";
import UserReducers from "./UserReducers";

const rootReducer  = combineReducers({
        accessToken:UserReducers,
})
export default rootReducer;