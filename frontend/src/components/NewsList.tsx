import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import '../styles/AdminDashboard.css';

const NewsList = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await api.get('/api/admin/news');
      setNews(response.data.news);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      try {
        await api.delete(`/api/admin/news/${id}`);
        alert('News deleted successfully!');
        // Refresh the news list
        fetchNews();
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Failed to delete news.');
      }
    }
  };

  return (
    <div className='dashboard-section'>
      <h2>Manage News</h2>
      {news.map((item) => (
        <div key={item._id} className='news-item'>
          <span>{item.title} - <strong>{item.published ? 'Published' : 'Draft'}</strong></span>
          <div>
            <Link to={`/admin/news/edit/${item._id}`} className='nav-button'>Edit</Link>
            <button onClick={() => handleDelete(item._id)} className='nav-button'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;