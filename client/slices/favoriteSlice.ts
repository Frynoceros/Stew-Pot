import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    // add your non-async reducers here
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      let filtered;
      const { id } = action.payload;
      const existingFav = state.find(fav => fav.id === id);
      if(existingFav) {
        filtered = state.filter(fav => fav.id !== id);
      }
      state = filtered;
    }
  }
})
// console.log(favoriteSlice)

// Action creators
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;


