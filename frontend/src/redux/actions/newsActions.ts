import { toast } from 'react-toastify';
import API from '../../config/api';
import {
  newsRequest,
  newsSuccess,
  newsFailure,
  getNewsSuccess,
} from '../slices/newsSlice';
import type { AppDispatch } from '../store';

export const fetchAllNews = async (dispatch: AppDispatch) => {
  dispatch(newsRequest());
  try {
    const response = await API.get('/news');
    dispatch(getNewsSuccess(response.data.news));
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to fetch news';
    dispatch(newsFailure(errorMessage));
    toast.error(errorMessage);
  }
};

export const getNewsById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(newsRequest());
  try {
    const response = await API.get(`/news/${id}`);
    dispatch(newsSuccess());
    return response.data.news;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to fetch news';
    dispatch(newsFailure(errorMessage));
    toast.error(errorMessage);
    return null;
  }
};

export const likeNews = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await API.post(`/news/${id}/like`);
    dispatch(fetchAllNews);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to like news';
    toast.error(errorMessage);
  }
};