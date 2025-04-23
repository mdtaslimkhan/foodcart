import { createSlice } from "@reduxjs/toolkit";

const CartListSlice = createSlice({
    name: 'cartlistslice',
    initialState: {
        data: null,
        ids: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.ids.push(action.payload.id);
        },
        removeFromCart: (state, action) => {
            console.log(action);
            state.ids.splice(state.ids.indexOf(action.payload.id));
        },

    }
});

export const { addToCart, removeFromCart } = CartListSlice.actions;

export default CartListSlice.reducer;