import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createUserApi } from "./authApi";

// export const createUserAsync = createAsyncThunk(
//     "auth/createUser",
//     async (data) => {
//         const responce = await createUserApi(data)
//         return responce.data
//     }
// )

const counterSlice = createSlice({
    name: "auth",
    initialState: {
        user: null
    },
    reducers: {},
    extraReducers(builder) {

    },
})

export default counterSlice.reducer