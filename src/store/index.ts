import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cart'
import { loadingReducer } from './reducers/loading'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loading: loadingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
