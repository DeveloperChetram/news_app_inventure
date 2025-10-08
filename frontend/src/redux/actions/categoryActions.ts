import { toast } from 'react-toastify';
import API from '../../config/api';
import {
  categoryRequest,
  categorySuccess,
  categoryFailure,
  getCategoriesSuccess,
} from '../slices/categorySlice';
import type { AppDispatch } from '../store.js';

export const fetchAllCategories = async (dispatch: AppDispatch) => {
  dispatch(categoryRequest());
  try {
    const response = await API.get('/categories');
    dispatch(getCategoriesSuccess(response.data.categories));
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to fetch categories';
    dispatch(categoryFailure(errorMessage));
    toast.error(errorMessage);
  }
};