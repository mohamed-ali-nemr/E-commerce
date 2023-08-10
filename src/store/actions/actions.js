import {ADD_TO_CART,REMOVE_FROM_CART} from "./types"

//action creator
export function addToCart(productInfo) {
  return {
    type: ADD_TO_CART,
    productInfo,
  };
}

//action creator
export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    index,
  };
}


