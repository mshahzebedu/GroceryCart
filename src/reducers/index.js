import { combineReducers } from "redux";
import grocery from "./groceryReducer";
import ShoppingBagReducer from "./shoppingBagReducer";

const rootReducer = combineReducers({
  grocery,
  ShoppingBagReducer,
});

export default rootReducer;
