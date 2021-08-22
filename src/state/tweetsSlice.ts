import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ITweet } from '../Interfaces'

interface State {
  loading: boolean
  tweets: ITweet[]
  error: string
}

const initialState: State = {
  loading: false,
  tweets: [],
  error: ''
}

// async(customArg: Use this for ids and stuff, defaultArgs)
export const getTweets = createAsyncThunk('tweets/getTweets', async () => {
  const { data }: { data: ITweet[] } = await axios.get(
    'http://localhost:9000/tweets'
  )
  return data
})

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTweets.pending, (state) => {
        state.loading = true
      })
      .addCase(getTweets.fulfilled, (state, { payload }) => {
        state.loading = false
        state.tweets = payload
        // if (typeof payload === 'string') {
        console.log(typeof payload)
        // }
      })
      .addCase(getTweets.rejected, (state, { error }) => {
        state.loading = false
        state.error = error.message!
      })
  }
})

export default tweetsSlice.reducer
