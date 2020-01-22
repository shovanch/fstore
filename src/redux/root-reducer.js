import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/user.reducer";

// Combine the state from the reducers into one giant state object
const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
