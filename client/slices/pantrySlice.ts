import { createSlice } from '@reduxjs/toolkit'

export const pantrySlice = createSlice({
  name: 'pantry',
  initialState: [] as any,
  reducers: {
    // add your non-async reducers here
    addPantryItem: (state, action) => {
      state.recipeList.push(action.payload);
    },
    removePantryItem: (state, action) => {
      state.recipeList.filter((el, ind) => ind !== action.payload.index)
    }
  }
})
// Action creators
export const { addPantryItem, removePantryItem } = pantrySlice.actions;
export default pantrySlice.reducer;


