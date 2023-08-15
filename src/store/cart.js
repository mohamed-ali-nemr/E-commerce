import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (payload) => {
        return payload;
    }
);
export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (index) => {
        return index;
    }
);



const invoicesSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Other reducer actions...
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.products = [...state.products, action.payload]
                // state.products.push(action.payload)
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.products = state.products.filter((p,i)=>i!==action.payload)
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.loading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            )

    },
});


export default invoicesSlice.reducer;

