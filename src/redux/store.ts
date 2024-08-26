import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice"
import movieSlice from "./movie/moviesSlice"
import notificationSlice from "./notification/notificationSlice"
import subscriptionSlice from "./subscription/subscriptionSlice"
import LanguageSlice from "./language/LanguageSlice";
import profileSlice from "./profile/profileSlice";
import filterSlice from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        movie: movieSlice,
        notification: notificationSlice,
        subscription: subscriptionSlice,
        language: LanguageSlice,
        profile:profileSlice,
        filter:filterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
