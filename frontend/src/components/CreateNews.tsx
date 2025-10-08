import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const CreateNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/categories'
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/news',
        data,
        { withCredentials: true }
      );
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return (
    <div className='dashboard-section'>
      <h2>Create News</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Title</label>
          <input {...register('title', { required: 'Title is required' })} />
          {errors.title && <p className='error'>{errors.title.message}</p>}
        </div>

        <div className='form-group'>
          <label>Content</label>
          <textarea
            {...register('content', { required: 'Content is required' })}
          />
          {errors.content && <p className='error'>{errors.content.message}</p>}
        </div>

        <div className='form-group'>
          <label>Category</label>
          <select
            {...register('categoryId', { required: 'Category is required' })}
          >
            <option value=''>Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className='error'>{errors.categoryId.message}</p>
          )}
        </div>

        <div className='form-group'>
          <label>
            <input type='checkbox' {...register('published')} />
            Published
          </label>
        </div>

        <button type='submit' className='auth-button'>
          Create News
        </button>
      </form>
    </div>
  );
};

export default CreateNews;