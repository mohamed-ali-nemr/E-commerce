import { createStore } from "redux";
import cartReducer from "./reducers";

const initialState = {
  cart: [
    {
      product: {
        id: 1,
        title: "post title 1",
        body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora fugiat quasi earum sapiente illum nulla? Deleniti id, nisi deserunt corporis et dolores ea veniam a quam quod, aliquid neque quidem amet aut nemo",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        author: "Admin1",
      },
    },
  ],
};

// const reducers=(state)=>{
//     return state;
// }

const store = createStore(cartReducer, initialState);

export default store;
