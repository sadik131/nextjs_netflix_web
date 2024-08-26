// src/redux/filter/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  searchQuery: string;
  genre: string;
}

const initialState: FilterState = {
  searchQuery: '',
  genre: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    resetFilters(state) {
      state.searchQuery = '';
      state.genre = '';
    },
  },
});

export const { setSearchQuery, setGenre, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
