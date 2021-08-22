import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import tweetsReducer from './tweetsSlice'
import newsReducer from './newsSlice'

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    news: newsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
