import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice"
import movieSlice from "./movie/moviesSlice"
import notificationSlice from "./notification/notificationSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        movie: movieSlice,
        notification:notificationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
