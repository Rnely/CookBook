import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './slices/querySlice.js'

export const store = configureStore({
    reducer: {
        recipeFilter: queryReducer,
    },
})