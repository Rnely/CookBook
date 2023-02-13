import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
    return fetch ("http://localhost:4000/recipes/").then((res) =>
        res.json()
    )
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        loading: false,
    },
    extraReducers: {
        [getRecipes.pending]: (state, action) => {
            state.loading = true
        },
        [getRecipes.fulfilled]: (state, action) => {
            state.loading = false
            state.recipes = action.payload
        },
        [getRecipes.rejected]: (state, action) => {
            state.loading = false
        },
    },
})

export default recipeSlice.reducer