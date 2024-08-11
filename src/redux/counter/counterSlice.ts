import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {},
    extraReducers(builder) {

    },
})

export default counterSlice.reducer