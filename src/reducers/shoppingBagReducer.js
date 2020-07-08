import { ADD_GROCERY } from "../actions/index";
import { REMOVE_GROCERY } from "../actions/index";
import groceryItems from "../data/groceryItems.json";

function ShoppingBagReducer(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
      let grocery = [...state, addBag(action.id)];

      return grocery;
    case REMOVE_GROCERY:
      let Shoppingbagcart = state.filter((item) => item.id !== action.id);
      return Shoppingbagcart;
    default:
      return state;
  }
}

export default ShoppingBagReducer;
function addBag(id) {
  let item = groceryItems.find((item) => item.id === id);
  return item;
}
