import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/AdminDashboard.css';

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/categories',
        data,
        { withCredentials: true }
      );
      console.log('Category created:', response.data);
      alert('Category created successfully!');
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error creating category:', error);
      alert('Failed to create category.');
    }
  };

  return (
    <div className='dashboard-section'>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Category Name</label>
          <input
            {...register('name', { required: 'Category name is required' })}
          />
          {errors.name && <p className='error'>{errors.name.message}</p>}
        </div>
        <button type='submit' className='auth-button'>
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;