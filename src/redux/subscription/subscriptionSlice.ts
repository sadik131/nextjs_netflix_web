import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface SubscriptionState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    plans: Array<any>;
    currentPlan: any;
}

const initialState: SubscriptionState = {
    status: 'idle',
    plans: [],
    currentPlan: null,
};

export const fetchPlans = createAsyncThunk(
    'subscription/fetchPlans',
    async () => {
        const response = await fetch('/api/stripe');
        const data = await response.json();
        return data.data;
    });

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setCurrentPlan: (state, action) => {
            state.currentPlan = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlans.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlans.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.plans = action.payload;
            })
            
    },
});

export const { setCurrentPlan } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
