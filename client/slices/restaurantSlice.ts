import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RestaurantType } from "../constants"
import { RootState } from "../store/store";
import { RestaurantDataType } from "../sanity/dataTypes";

export interface ResrtaurantState {
  restaurant: undefined | RestaurantDataType;
}

const initialState: ResrtaurantState = {
  restaurant: undefined,
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantDataType>) => {
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant
export default restaurantSlice.reducer