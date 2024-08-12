import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserApi, fetchUserApi, makeAdminApi, deleteUserApi } from "./authApi";
import { CreateUserData, User } from "@/utils";

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

export const makeAdminAsync = createAsyncThunk<User, { update: string, id: string }>(
    "auth/makeAdminApi",
    async ({ update, id }) => {
        const response = await makeAdminApi({ update, id });
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

interface AuthState {
    currentUser: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    users: User[]
}

const initialState: AuthState = {
    currentUser: null,
    users: [],
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
            .addCase(makeAdminAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(makeAdminAsync.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                const update = action.payload
                const userIndex = state.users.findIndex(user => user.id === update.id)
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

    },
})

export const { clearState } = authSlice.actions;
export default authSlice.reducer