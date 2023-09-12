// import { createStore } from "redux";
// import cartReducer from "./reducers";

// const initialState = {
//   cart: [],
// };

// // const reducers=(state)=>{
// //     return state;
// // }

// const store = createStore(cartReducer, initialState);
// export default store;



// ** Redux Imports
//1. cofigureStore
import rootReducer from './reducers/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export { store }