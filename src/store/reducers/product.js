import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

const url = "http://localhost:3000/";

//2.createAction
export const getAllStocks = createAsyncThunk("stock/getAllStocks", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  console.log(resp);
  return resp;
});

//4. Createslice consist of (reducer, action, state )
const stocksSlice = createSlice({
  name: "stock",
  initialState: {
    stocks: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Other reducer actions...
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStocks.fulfilled, (state, action) => {
        state.stocks = action.payload;
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default stocksSlice.reducer;
