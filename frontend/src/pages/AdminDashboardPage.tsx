import React from 'react';
import NewsManagement from '../components/admin/NewsManagement';
import CategoryManagement from '../components/admin/CategoryManagement';
import '../styles/AdminDashboard.css';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-section">
        <NewsManagement />
      </div>
      <div className="dashboard-section">
        <CategoryManagement />
      </div>
    </div>
  );
};

export default AdminDashboardPage;