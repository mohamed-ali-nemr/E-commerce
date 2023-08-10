import {ADD_TO_CART} from "./types"

//action creator
export function addToCart(productInfo) {
  return {
    type: ADD_TO_CART,
    productInfo,
  };
}


