import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { loginUser } from '../redux/actions/authActions';
import '../styles/LoginPage.css'; // You will also need to create this CSS file

// Define the type for our form inputs
type Inputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await loginUser(dispatch, data);
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;