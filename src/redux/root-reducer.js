import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import cartReducer from "./cart/cart.reducer";

// Reducer to persist in localStorage
const persistConfig = {
  // Key to rootReducer
  key: "root",
  // Use localStorage
  storage,
  // Reducer to store
  whiteList: ["cart"]
};

// Combine the state from the reducers into one giant state object
const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  directory: directoryReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
