import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';
import '../styles/AdminDashboard.css';

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await api.get('/api/categories');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Fetch the news article to edit
    const fetchNewsArticle = async () => {
      try {
        const response = await api.get(`/api/news/${id}`);
        // Populate the form with existing data
        reset(response.data.news);
      } catch (error) {
        console.error('Error fetching news article:', error);
      }
    };
    
    fetchCategories();
    fetchNewsArticle();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      await api.put(`/api/admin/news/${id}`, data);
      alert('News updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error updating news:', error);
      alert('Failed to update news.');
    }
  };

  return (
    <div className='dashboard-section'>
      <h2>Edit News</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Title</label>
          <input {...register('title', { required: 'Title is required' })} />
          {errors.title && <p className='error'>{errors.title.message}</p>}
        </div>

        <div className='form-group'>
          <label>Content</label>
          <textarea {...register('content', { required: 'Content is required' })} />
          {errors.content && <p className='error'>{errors.content.message}</p>}
        </div>

        <div className='form-group'>
          <label>Category</label>
          <select {...register('categoryId', { required: 'Category is required' })}>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && <p className='error'>{errors.categoryId.message}</p>}
        </div>

        <button type='submit' className='auth-button'>Update News</button>
      </form>
    </div>
  );
};

export default EditNews;