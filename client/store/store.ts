import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import restaurantSlice from "../slices/restaurantSlice";


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
