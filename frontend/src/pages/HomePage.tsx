import React, { useEffect } from 'react';import  { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';import { useSelector, useDispatch } from 'react-redux';

import { fetchAllNews } from '../redux/actions/newsActions';import type { RootState } from '../redux/store';

import NewsCard from '../components/NewsCard';import { fetchAllNews } from '../redux/actions/newsActions';

import type { RootState } from '../redux/store';import NewsCard from '../components/NewsCard';

import '../styles/HomePage.css';import '../styles/HomePage.css';



interface NewsItem {const HomePage: React.FC = () => {

  _id: string;  const dispatch = useDispatch();

  title: string;  const { news, loading } = useSelector((state: RootState) => state.news);

  content: string;

  categoryId: {  useEffect(() => {

    _id: string;    fetchAllNews(dispatch);

    name: string;  }, [dispatch]);

  };

}  if (loading) return <p>Loading news...</p>;



const HomePage: React.FC = () => {  return (

  const dispatch = useDispatch();    <div className="home-container">

  const { news, loading } = useSelector((state: RootState) => state.news);      <h1>Latest News</h1>

      <div className="news-grid">

  useEffect(() => {        {news.map((item) => (

    dispatch(fetchAllNews());          <NewsCard key={item._id} newsItem={item} />

  }, [dispatch]);        ))}

      </div>

  if (loading) {    </div>

    return <div className="loading">Loading news...</div>;  );

  }};



  return (export default HomePage;
    <div className="home-container">
      <h1>Latest News</h1>
      <div className="news-grid">
        {news?.map((item: NewsItem) => (
          <NewsCard key={item._id} newsItem={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;