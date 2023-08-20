import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

//action creator
export function addToCart(productInfo, quantity) {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity,
  };
}

//action creator
export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    index,
  };
}
