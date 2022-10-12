import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Comic } from '../../types/comic'

export interface CartState {
  products: Comic[]
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    actionAddProductToCart: (state, action: PayloadAction<Comic>) => {
      const productAlreadyInCart = state.products.find(
        (product) => product.id === action.payload.id,
      )

      if (productAlreadyInCart) return

      state.products.push(action.payload)
    },

    actionRemoveProductFromCart: (
      state,
      action: PayloadAction<{ productId: string }>,
    ) => {
      const filtered = state.products.filter(
        (product) => product.id !== action.payload.productId,
      )

      state.products = filtered
    },
  },
})

export const { actionAddProductToCart, actionRemoveProductFromCart } =
  cartSlice.actions

const cartReducer = cartSlice.reducer

export { cartReducer }
