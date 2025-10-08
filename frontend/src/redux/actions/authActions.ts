import { toast } from 'react-toastify';
import API from '../../config/api'; // Updated import path
import { authRequest, authSuccess, authFailure, logoutSuccess } from '../slices/authSlice';
import type { AppDispatch } from '../store';

export const loginUser = async (dispatch: AppDispatch, data: object) => {
  dispatch(authRequest());
  try {
    const response = await API.post('/auth/login', data);
    dispatch(authSuccess(response.data.user));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    toast.success('Login successful!');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Login failed';
    dispatch(authFailure(errorMessage));
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
};

export const registerUser = async (dispatch: AppDispatch, data: object) => {
  dispatch(authRequest());
  try {
    const response = await API.post('/auth/register', data);
    dispatch(authSuccess(response.data.user));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    toast.success('Registration successful!');
    return { success: true };
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Registration failed';
    dispatch(authFailure(errorMessage));
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
};

export const logoutUser = (dispatch: AppDispatch) => {
  localStorage.removeItem('user');
  dispatch(logoutSuccess());
  toast.info('You have been logged out.');
};