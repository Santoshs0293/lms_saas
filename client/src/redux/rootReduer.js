import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import courseReducer from "./course/courseReducer";
import cartReducer from "./cart/cartReducer";


const rootReducer=combineReducers({
    auth: authReducer,
    course: courseReducer,
    cart : cartReducer
})

export default rootReducer