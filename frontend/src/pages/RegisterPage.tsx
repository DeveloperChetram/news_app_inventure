import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { registerUser } from '../redux/actions/authActions';
import '../styles/RegisterPage.css';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await registerUser(dispatch, data);
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;