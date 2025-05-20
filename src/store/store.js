import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import cartReducer from './slices/cart';
const store = configureStore({
  reducer: {
    counter : counterReducer,
    cart : cartReducer
  },
});

export default store;
