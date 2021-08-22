import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { INews } from '../Interfaces'

interface State {
  loading: boolean
  news: INews['articles']
  error: string
}

const initialState: State = {
  loading: false,
  news: [],
  error: ''
}

export const getNews = createAsyncThunk(
  'tweets/getNews',
  async ({ perPage, page }: { perPage: number; page: number }) => {
    console.log(perPage, page)
    const { data }: { data: INews } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=18753c3ebc2f484e9d0c7b060a9fa578&pageSize=${perPage}&page=${page}`
    )
    return data
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false
        state.news = payload.articles
      })
      .addCase(getNews.rejected, (state, { error }) => {
        state.loading = false
        state.error = error.message!
      })
  }
})

export default newsSlice.reducer
