import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from '../api/axios';
import { selectCurrentUser } from '../redux/authSlice';
import '../styles/NewsDetailPage.css';

const NewsDetail = () => {
  const [news, setNews] = useState(null);
  const { id } = useParams();
  const user = useSelector(selectCurrentUser);

  // State to track likes
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get(`/api/news/${id}`);
        const fetchedNews = response.data.news;
        setNews(fetchedNews);

        // Initialize like state from fetched data
        if (fetchedNews.likes) {
          const likesMap = new Map(Object.entries(fetchedNews.likes));
          setLikes(likesMap.size);
          if (user && likesMap.has(user.id)) {
            setIsLiked(true);
          }
        }

      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    if (id) {
      fetchNews();
    }
  }, [id, user]);

  // Function to handle the like button click
  const handleLike = async () => {
    if (!user) {
      alert('You must be logged in to like a post.');
      return;
    }

    try {
      // The API call to your backend
      const response = await api.post(`/api/news/${id}/like`);
      const updatedNews = response.data.news;
      const likesMap = new Map(Object.entries(updatedNews.likes));

      // Update state based on the response
      setLikes(likesMap.size);
      setIsLiked(likesMap.has(user.id));

    } catch (error) {
      console.error('Error liking news:', error);
      alert('Failed to update like status.');
    }
  };

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

      {/* Like Button and Count */}
      <div className='like-section'>
        <button onClick={handleLike} className={`like-button ${isLiked ? 'liked' : ''}`}>
          {isLiked ? 'Unlike' : 'Like'}
        </button>
        <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
    </div>
  );
};

export default NewsDetail;