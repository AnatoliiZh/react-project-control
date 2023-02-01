import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import searchReducer from './searchReducer'

export const store = configureStore({
    reducer: {
        likeArticles: likeReducer,
        searching: searchReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch