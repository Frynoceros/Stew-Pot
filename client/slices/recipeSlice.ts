// import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: [] as any,
  reducers: {
    // add your non-async reducers here
    addRecipe: (state, action) => {
      state.recipeList.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.recipeList.filter((el, ind) => ind !== action.payload.index)
    }
  },
  extraReducers: {
    // add your async reducers here
  }
})
// Action creators
export const { addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;


