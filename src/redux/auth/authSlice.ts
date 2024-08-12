import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserApi } from "./authApi";
import { CreateUserData, User } from "@/utils";

export const createUserAsync = createAsyncThunk<User, CreateUserData>(
    "auth/createUser",
    async (data: CreateUserData): Promise<User> => {
        const responce = await createUserApi(data)
        return responce.data
    }
)

interface AuthState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: (state) => {
            console.log(state)
            state.user = null;
            state.status = 'idle';
            console.log(state,"clear")
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
            state.user = action.payload;
        })
        .addCase(createUserAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to create user';
        });
        
},
})

export const { clearState } = authSlice.actions;
export default authSlice.reducer