import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DishesType } from "../constants"
import { RootState } from "../store/store"
import { DishDataType } from "../sanity/dataTypes"

export interface DishStoreState {
  items: DishDataType[]
}

const initialState: DishStoreState= {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<DishDataType>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action:PayloadAction<DishDataType>)  => {
      let newCart = [...state.items]
      let cartIndex = state.items.findIndex((cart) => cart._id == action.payload._id)
      if (cartIndex >= 0) {
        newCart.splice(cartIndex, 1)
      } else {
        console.log("The item is not in your cart!")
      }
      state.items = newCart
    },
    emptyCart: (state) => {
      state.items = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart , emptyCart, removeFromCart} = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartById = (state: RootState, id: string) => state.cart.items.filter((item) => item._id === id)
export const selectCartTotal = (state: RootState) => state.cart.items.reduce((total: number, item) => total = total + item.price, 0)
export default cartSlice.reducer