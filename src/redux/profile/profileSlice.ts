import { ProfileProp } from '@/utils';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createProfileApi, fetchProfilesApi, deleteProfileApi } from './profileApi';

interface Profile {
    id: string;
    userId: string;
    name: string;
    type: 'PARENT' | 'CHILD';
}

interface ProfileState {
    profiles: Profile[];
    currentProfile: Profile | null;
    status: "loading" | "idle" | "success" | "error"
}

const initialState: ProfileState = {
    profiles: [],
    currentProfile: null,
    status: "idle"
};

export const fetchProfilesAsync = createAsyncThunk<Profile[]>(
    'profile/fetchProfiles',
    async () => {
        const response = await fetchProfilesApi();
        return response.data;
    }
);

export const deleteProfileAsync = createAsyncThunk<ProfileProp, { id: string }>(
    'profile/deleteProfile',
    async (id: { id: string }) => {
        const responce = await deleteProfileApi(id);
        return responce.data;
    }
);

export const createProfileAsync = createAsyncThunk<ProfileProp, ProfileProp>(
    "profile/createProfileApi",
    async (data: ProfileProp): Promise<ProfileProp> => {
        const responce = await createProfileApi(data)
        return responce.data
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(createProfileAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(createProfileAsync.fulfilled, (state, action: PayloadAction<ProfileProp>) => {
                state.status = "success",
                    state.profiles.push(action.payload)
            })
            .addCase(fetchProfilesAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProfilesAsync.fulfilled, (state, action: PayloadAction<ProfileProp[]>) => {
                state.status = "success",
                    state.profiles = action.payload
            })
            .addCase(deleteProfileAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(deleteProfileAsync.fulfilled, (state, action: PayloadAction<ProfileProp>) => {
                state.status = "success",
                    state.profiles.filter(item => item.id !== action.payload.id)
            })
    },
});

export default profileSlice.reducer;
