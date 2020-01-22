import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";

// Combine the state from the reducers into one giant state object
const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer
});

export default rootReducer;
