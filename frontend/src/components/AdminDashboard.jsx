import React from 'react';
import CreateNews from './CreateNews';
import CreateCategory from './CreateCategory';
import NewsList from './NewsList'; // Import the new news list
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard'>
      <h1>Admin Dashboard</h1>
      <CreateCategory />
      <CreateNews />
      <NewsList /> {/* Add the news list component */}
    </div>
  );
};

export default AdminDashboard;