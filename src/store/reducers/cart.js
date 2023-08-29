import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//2.createAction
export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (payload ) => {
        return payload;
    }
);
//2.createAction
export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (index) => {
        return index;
    }
);

export const setQuantity = createAsyncThunk(
    'cart/setQuantity',
    async (payload) => {
        return payload;
    }
);
const recCalcCart=(state)=>{
    state.total=state.products.reduce((a,p)=>a+=p.total,0);
    state.totalQty=state.products.reduce((a,p)=>a+=p.qty,0);
}

//4. Createslice
const invoicesSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total:0,
        totalQty:0,
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
                recCalcCart(state)
                // state.products.push(action.payload)
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.products = state.products.filter((p,i)=>i!==action.payload)
                recCalcCart(state)
            })
            .addCase(setQuantity.fulfilled, (state, action) => {
                state.products[action.payload.id].qty = parseInt(action.payload.qty);
                state.products[action.payload.id].total = parseInt(action.payload.qty) * parseFloat(state.products[action.payload.id].price);
                recCalcCart(state)
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