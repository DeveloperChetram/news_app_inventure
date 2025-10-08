import { toast } from 'react-toastify';
import API from '../../config/api';
import {
  adminRequest,
  adminSuccess,
  adminFailure,
  getNewsSuccess,
  getCategoriesSuccess,
} from '../slices/adminSlice';
import { AppDispatch } from '../store';

// News Actions
export const createNews = (data: object) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.post('/admin/news', data);
    dispatch(adminSuccess());
    toast.success('News created successfully');
    dispatch(fetchAllNews);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to create news';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const updateNews = (id: string, data: object) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.put(`/admin/news/${id}`, data);
    dispatch(adminSuccess());
    toast.success('News updated successfully');
    dispatch(fetchAllNews);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to update news';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const deleteNews = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.delete(`/admin/news/${id}`);
    dispatch(adminSuccess());
    toast.success('News deleted successfully');
    dispatch(fetchAllNews);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to delete news';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const publishNews = (id: string, data: object) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.patch(`/admin/news/${id}/publish`, data);
    dispatch(adminSuccess());
    toast.success('News publish status updated');
    dispatch(fetchAllNews);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to update publish status';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const fetchAllNews = async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    const response = await API.get('/news');
    dispatch(getNewsSuccess(response.data.news));
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to fetch news';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

// Category Actions
export const createCategory = (data: object) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.post('/categories', data);
    dispatch(adminSuccess());
    toast.success('Category created successfully');
    dispatch(fetchAllCategories);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to create category';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const updateCategory = (id: string, data: object) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.put(`/categories/${id}`, data);
    dispatch(adminSuccess());
    toast.success('Category updated successfully');
    dispatch(fetchAllCategories);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to update category';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const deleteCategory = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(adminRequest());
  try {
    await API.delete(`/categories/${id}`);
    dispatch(adminSuccess());
    toast.success('Category deleted successfully');
    dispatch(fetchAllCategories);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to delete category';
    dispatch(adminFailure(errorMessage));
    toast.error(errorMessage);
  }
};