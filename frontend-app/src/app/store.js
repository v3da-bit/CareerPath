import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from '../features/sliderSlice'
import postReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice, 
    posts: postReducer, 
  },
})