import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice"
import movieSlice from "./movie/moviesSlice"
import notificationSlice from "./notification/notificationSlice"
import subscriptionSlice from "./subscription/subscriptionSlice"
import LanguageSlice from "./language/LanguageSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        movie: movieSlice,
        notification: notificationSlice,
        subscription: subscriptionSlice,
        language: LanguageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
