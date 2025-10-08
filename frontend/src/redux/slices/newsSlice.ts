import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  loading: boolean;
  error: string | null;
  news: any[];
}

const initialState: NewsState = {
  loading: false,
  error: null,
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsRequest: (state) => {
      state.loading = true;
    },
    newsSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    newsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getNewsSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.news = action.payload;
      state.error = null;
    },
  },
});

export const { newsRequest, newsSuccess, newsFailure, getNewsSuccess } = newsSlice.actions;
export default newsSlice.reducer;