import { createStore } from "redux";
import cartReducer from "./reducers";

const initialState = {
  cart: [],
};

// const reducers=(state)=>{
//     return state;
// }

const store = createStore(cartReducer, initialState);

export default store;
