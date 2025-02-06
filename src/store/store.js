import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice.js";
import orderSlice from "./slices/orderSlice.js";
import appSlice from "./slices/appSlice.js";
const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
