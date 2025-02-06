import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    sortingDigit: 1,
    wishlist: [],
  },
  reducers: {
    setSortingDigit: (state, action) => {
      state.sortingDigit = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setSortingDigit, setWishlist, removeWishlist } =
  appSlice.actions;
export default appSlice.reducer;
