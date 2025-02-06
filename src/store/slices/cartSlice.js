import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state = state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      return (state = []);
    },
    incrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product.quantity -= 1;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
