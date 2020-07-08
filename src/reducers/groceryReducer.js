import { ADD_GROCERY } from "./../actions/index";
import { REMOVE_GROCERY } from "./../actions/index";
import groceryItems from "./../data/groceryItems.json";

function grocery(state = groceryItems, action) {
  switch (action.type) {
    case ADD_GROCERY:
      let grocery = state.filter((item) => item.id !== action.id);
      return grocery;
    case REMOVE_GROCERY:
      let backToGrocery = [...state, addback(action.id)];
      return backToGrocery;
    default:
      return state;
  }
}

export default grocery;
function addback(id) {
  let item = groceryItems.find((item) => item.id === id);
  return item;
}
