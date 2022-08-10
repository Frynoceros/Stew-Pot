// import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [] as any,
  reducers: {
    // add your non-async reducers here
    addFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteList.filter((el, ind) => ind !== action.payload.index)
    }
  },
  extraReducers: {
    // add your async reducers here
  }
})
// Action creators
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;


