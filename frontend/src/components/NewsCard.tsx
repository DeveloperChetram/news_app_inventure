import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewsCard.css';

interface NewsItem {
  _id: string;
  title: string;
  content: string;
}

interface NewsCardProps {
  newsItem: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  return (
    <div className="news-card">
      <h2>{newsItem.title}</h2>
      <p>{newsItem.content.substring(0, 100)}...</p>
      <Link to={`/news/${newsItem._id}`}>Read More</Link>
    </div>
  );
};

export default NewsCard;