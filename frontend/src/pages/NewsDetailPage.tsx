import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { getNewsById } from '../redux/actions/newsActions';
import '../styles/NewsDetailPage.css';

interface News {
  _id: string;
  title: string;
  content: string;
  authorId: {
    name: string;
  };
  categoryId: {
    name: string;
  }
}

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      if (id) {
        const newsData = await dispatch(getNewsById(id));
        setNews(newsData);
        setLoading(false);
      }
    };
    fetchNews();
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (!news) return <p>News not found.</p>;

  return (
    <div className="news-detail-container">
      <h1 className="news-title">{news.title}</h1>
      <div className="news-meta">
        <span>By {news.authorId.name}</span>
        <span>Category: {news.categoryId.name}</span>
      </div>
      <div className="news-content">
        <p>{news.content}</p>
      </div>
    </div>
  );
};

export default NewsDetailPage;