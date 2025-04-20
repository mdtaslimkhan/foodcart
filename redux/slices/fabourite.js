import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const FabouriteListSlice = createSlice({
    name: "FabouriteList",
    initialState: {
        data: null,
        ids: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeItem: (state, action ) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    },

});

export const { addItem, removeItem } = FabouriteListSlice.actions;

export default FabouriteListSlice.reducer;