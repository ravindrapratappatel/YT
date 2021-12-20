import get_user_name from "./get_user_name";
import channeldetails from "./channeldetails";
import { combineReducers } from "redux";

const rootReducer= combineReducers({
    get_user_name, channeldetails
})

export default rootReducer;