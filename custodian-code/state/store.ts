import { configureStore } from "@reduxjs/toolkit"
import Reducer from './app-slice'

export const store = configureStore({
  reducer: Reducer
})
