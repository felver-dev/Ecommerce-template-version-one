import productReducer from "./productReducer";
import wishlistReducer from "./wishlistReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productData: productReducer,
  wishlistData: wishlistReducer,
  cartData: cartReducer
});

export default rootReducer;
