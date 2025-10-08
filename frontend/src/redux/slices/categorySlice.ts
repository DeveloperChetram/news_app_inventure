import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  loading: boolean;
  error: string | null;
  categories: any[];
}

const initialState: CategoryState = {
  loading: false,
  error: null,
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryRequest: (state) => {
      state.loading = true;
    },
    categorySuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    categoryFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCategoriesSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    },
  },
});

export const {
  categoryRequest,
  categorySuccess,
  categoryFailure,
  getCategoriesSuccess,
} = categorySlice.actions;
export default categorySlice.reducer;