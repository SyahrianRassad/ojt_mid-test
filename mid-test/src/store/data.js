import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "username",
    initialState:{
        username: ""
    },
    reducers: {
        tambahUsername(state, action){
            state.username = action.payload
        }
    }
})

export const { tambahUsername } = dataSlice.actions;

export default dataSlice.reducer;