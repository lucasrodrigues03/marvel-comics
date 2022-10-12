import { createSlice } from '@reduxjs/toolkit'

export interface LoadingState {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,

  reducers: {
    actionActivateLoading: (state) => {
      state.isLoading = true
    },

    actionDesactivateLoading: (state) => {
      state.isLoading = false
    },
  },
})

export const { actionActivateLoading, actionDesactivateLoading } =
  loadingSlice.actions

const loadingReducer = loadingSlice.reducer

export { loadingReducer }
