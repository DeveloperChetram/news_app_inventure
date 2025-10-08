import React from 'react';
import CreateNews from './CreateNews';
import CreateCategory from './CreateCategory'; // Import the new component
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className='admin-dashboard'>
      <h1>Admin Dashboard</h1>
      <CreateCategory /> {/* Add the create category component */}
      <CreateNews />
    </div>
  );
};

export default AdminDashboard;