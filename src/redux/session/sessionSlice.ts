import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { calcSessionApi, createSessionApi } from './sessionApi';
import { CreateSession, SessionProp } from '@/utils';

export interface UserActivityState {
    sessionStartTime: number | null;
    sessionEndTime: number | null;
    sessionDuration: number;
    loading?: boolean;
    error?: string | null;
}

const initialState: UserActivityState = {
    sessionStartTime: null,
    sessionEndTime: null,
    sessionDuration: 0,
    loading: false,
    error: null,
};


export const calcSessionAsync = createAsyncThunk<SessionProp, { endTime: number, userId: string }>(
    'userActivity/calcSessionApi',
    async ({ endTime, userId }: { endTime: number, userId: string }): Promise<SessionProp> => {
        const responce = await calcSessionApi({ endTime, userId })
        return responce.data
    }
);

export const createSessionAsync = createAsyncThunk<SessionProp, { startTime: number, userId: string }>(
    'userActivity/createSessionApi',
    async ({ userId, startTime }: { startTime: number, userId: string }): Promise<SessionProp> => {
        console.log(userId, startTime);
        const responce = await createSessionApi({ userId, startTime })
        return responce.data
    }
);

const userActivitySlice = createSlice({
    name: 'userActivity',
    initialState,
    reducers: {
        resetSession: (state) => {
            state.sessionStartTime = null;
            state.sessionEndTime = null;
            state.sessionDuration = 0;
            state.loading = false;
            state.error = null;
        },

    },
    extraReducers: (builder) => {
        builder

    },
});

export const { resetSession } = userActivitySlice.actions;
export default userActivitySlice.reducer;
