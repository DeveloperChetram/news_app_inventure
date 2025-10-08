import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
  loading: boolean;
  error: string | null;
  news: any[];
  categories: any[];
}

const initialState: AdminState = {
  loading: false,
  error: null,
  news: [],
  categories: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminRequest: (state) => {
      state.loading = true;
    },
    adminSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    adminFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getNewsSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.news = action.payload;
    },
    getCategoriesSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.categories = action.payload;
    },
  },
});

export const {
  adminRequest,
  adminSuccess,
  adminFailure,
  getNewsSuccess,
  getCategoriesSuccess,
} = adminSlice.actions;

export default adminSlice.reducer;