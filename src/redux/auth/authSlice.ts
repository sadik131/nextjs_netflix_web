import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserApi, fetchUserApi, updateUserApi, deleteUserApi, deleteFevApi, favoritesApi, ToggleFavoriteApi } from "./authApi";
import { CreateUserData, User, FavoriteList, UpdateUser } from "@/utils";

export const createUserAsync = createAsyncThunk<User, CreateUserData>(
    "auth/createUserApi",
    async (data: CreateUserData): Promise<User> => {
        const responce = await createUserApi(data)
        return responce.data
    }
)

export const fetchUserAsync = createAsyncThunk<User[]>(
    "auth/fetchUserApi",
    async (): Promise<User[]> => {
        const responce = await fetchUserApi()
        return responce.data
    }
)

export const updateUserAsync = createAsyncThunk<User, UpdateUser>(
    "auth/updateUserApi",
    async (update: UpdateUser) => {
        const response = await updateUserApi(update);
        return response.data;
    }
);

export const deleteUserAsync = createAsyncThunk<User, { id: string }>(
    "auth/deleteUserApi",
    async ({ id }) => {
        const response = await deleteUserApi(id);
        return response.data;
    }
);

export const ToggleFavoriteAsync = createAsyncThunk<FavoriteList, { id: string }>(
    "auth/ToggleFavoriteApi",
    async ({ id }): Promise<FavoriteList> => {
        const response = await ToggleFavoriteApi(id);
        return response.data;
    }
);

export const deleteFevAsync = createAsyncThunk<FavoriteList, { id: string }>(
    "auth/deleteFevApi",
    async ({ id }) => {
        const response = await deleteFevApi(id);
        return response.data;
    }
);

export const favoritesAsync = createAsyncThunk<FavoriteList[]>(
    "auth/favoritesApi",
    async (): Promise<FavoriteList[]> => {
        const response = await favoritesApi();
        return response.data;
    }
);

interface AuthState {
    currentUser: User | null;
    favorite: FavoriteList[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    users: User[]
}

const initialState: AuthState = {
    currentUser: null,
    users: [],
    favorite: [],
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: (state) => {
            console.log(state)
            state.currentUser = null;
            state.status = 'idle';
            console.log(state, "clear")
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(createUserAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                state.currentUser = action.payload;
            })
            .addCase(fetchUserAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUserAsync.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(updateUserAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            // id: '565bbdb1-54bb-45d5-8fba-52643fba714e',
            .addCase(updateUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                const update = action.payload
                console.log(update);
                const userIndex = state.users.findIndex(user => user.id === update.id)
                console.log(userIndex);
                if (userIndex !== -1) {
                    state.users[userIndex] = action.payload
                }
            })
            .addCase(deleteUserAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteUserAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                state.users = state.users.filter(user => user.id !== action.payload.id)
            })
            .addCase(favoritesAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(favoritesAsync.fulfilled, (state, action: PayloadAction<FavoriteList[]>) => {
                state.status = 'succeeded';
                state.favorite = action.payload
            })
            .addCase(deleteFevAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteFevAsync.fulfilled, (state, action: PayloadAction<FavoriteList>) => {
                state.status = 'succeeded';
                state.favorite = state.favorite.filter(fav => fav.id !== action.payload.id)
            })
            .addCase(ToggleFavoriteAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(ToggleFavoriteAsync.fulfilled, (state, action: PayloadAction<FavoriteList>) => {
                state.status = 'succeeded';
                const index = state.favorite.findIndex(fav => fav.movieId === action.payload.movieId);
                console.log(action.payload)
                if (index >= 0) {
                    state.favorite.splice(index, 1);
                } else {
                    state.favorite.push(action.payload);
                }
            })

    },
})

export const { clearState } = authSlice.actions;
export default authSlice.reducer