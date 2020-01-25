import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import cartReducer from "./cart/cart.reducer";

// Combine the state from the reducers into one giant state object
const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  directory: directoryReducer,
  cart: cartReducer
});

export default rootReducer;
