import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice"
import movieSlice from "./movie/moviesSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        movie: movieSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
