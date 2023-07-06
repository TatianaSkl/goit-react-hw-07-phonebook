import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    getFilterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { getFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
