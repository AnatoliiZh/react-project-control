import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './inputReducer'
import likeReducer from './likeReducer'
import searchReducer from './searchReducer'

export const store = configureStore({
    reducer: {
        likeArticles: likeReducer,
        searching: searchReducer,
        inputShow: inputReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch