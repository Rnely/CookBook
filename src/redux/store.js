import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './slices/querySlice'
import  recipeReducer from './slices/recipeSlice'

export const store = configureStore({
    reducer: {
        recipeFilter: queryReducer,
        recipe: recipeReducer,
    },
})