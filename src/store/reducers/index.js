import { ADD_TO_CART } from "../actions/types";

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

    default: 
      return state;
  }
}
