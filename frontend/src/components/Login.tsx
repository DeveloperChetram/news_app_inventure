import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice'; // Import the action
import '../styles/Auth.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/auth/login', data);
      const user = response.data.user;
      
      // Dispatch the action to save user credentials
      dispatch(setCredentials(user));
      
      console.log(response.data);

      // Navigate to admin page if admin, otherwise to home
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };
  
  // ... JSX remains the same
  return (
    <div className='auth-container'>
      <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div className='form-group'>
          <label>Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type='email'
          />
          {errors.email && <p className='error'>{errors.email.message}</p>}
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type='password'
          />
          {errors.password && (
            <p className='error'>{errors.password.message}</p>
          )}
        </div>
        <button className='auth-button' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;