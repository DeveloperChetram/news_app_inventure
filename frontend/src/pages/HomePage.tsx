import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchAllNews } from '../redux/actions/newsActions';
import NewsCard from '../components/NewsCard';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { news, loading } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    fetchAllNews(dispatch);
  }, [dispatch]);

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="home-container">
      <h1>Latest News</h1>
      <div className="news-grid">
        {news.map((item) => (
          <NewsCard key={item._id} newsItem={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;