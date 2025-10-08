import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/NewsDetailPage.css';

const NewsDetail = () => {
  const [news, setNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/news/${id}`
        );
        setNews(response.data.news);
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    if (id) {
      fetchNews();
    }
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className='news-detail-container'>
      <h1 className='news-title'>{news.title}</h1>
      <div className='news-meta'>
        <span>By: {news.authorId?.name}</span>
        <span>Category: {news.categoryId?.name}</span>
      </div>
      <p className='news-content'>{news.content}</p>
    </div>
  );
};

export default NewsDetail;