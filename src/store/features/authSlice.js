import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 0
    }
})
export const { increment, decrement, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;