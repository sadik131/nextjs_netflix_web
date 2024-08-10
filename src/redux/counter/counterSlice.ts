import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        int: state => {
            state.value += 1
        },
        dec: state => {
            state.value -= 1
        }
    },
    extraReducers(builder) {

    },
})

export const { int, dec } = counterSlice.actions;
export default counterSlice.reducer