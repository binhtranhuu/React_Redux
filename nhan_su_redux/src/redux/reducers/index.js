import { combineReducers } from "redux";
import alertsReducer from "./alerts";
import staffReducer from "./staffs";

const rootReducer = combineReducers({
    staff: staffReducer,
    alert: alertsReducer,
})

export default rootReducer;