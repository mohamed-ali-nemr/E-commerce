import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export default function cartReducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case ADD_TO_CART: {
      return {
        cart: [
          ...state.cart,
          {
            product: action.productInfo,
          },
        ],
      };
    }

    case REMOVE_FROM_CART: {
      const item_index = action.index;
      const new_state = { ...state };
      delete new_state.cart[item_index];
      state.cart = new_state.cart;
      // new_state.splice(item_index, 1);
      return new_state;
    }

    default:
      return state;
  }
}
