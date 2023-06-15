import { configureStore } from '@reduxjs/toolkit'
import { initialSlice } from './initialSlice'

export default configureStore({
  reducer: {
    initialS: initialSlice.reducer,
  },
})
