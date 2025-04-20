import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getItemList = createAsyncThunk("DashList", async(val) => {

    return [];
});


const DashListSlice = createSlice({
    name: "DashList",
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    reducers: {
        allItems: async (state, action) => {
            state.data += 1000
        },
        addItems: state => {
            state.data += 1000
        },
        removeItem: async (state, action) => {
            console.log("values: " + JSON.stringify(action.payload.id));
        },
        addList: (state, action) => {
            state.data += action.payload 
        }
    },
    extraReducers: builder => {
        builder.addCase(getItemList.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(getItemList.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(getItemList.rejected, (state, action) => {
            state.isLoader = true;
        });
    }
});

export const { addItems, removeItem, addList } = DashListSlice.actions;

export default DashListSlice.reducer;