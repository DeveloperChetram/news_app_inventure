import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NewsDetailPage from '../pages/NewsDetailPage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import PrivateRoute from './PrivateRoutes';
import AdminRoute from './AdminRoutes';
import NotFoundPage from '../pages/NotFoundPage';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      
      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        {/* Add any user-specific private routes here */}
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;