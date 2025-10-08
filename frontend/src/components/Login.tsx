import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/axios'; // Import the new api instance
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Use the pre-configured 'api' instance
      const response = await api.post('/api/auth/login', data);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

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