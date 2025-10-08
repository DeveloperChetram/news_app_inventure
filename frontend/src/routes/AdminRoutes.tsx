import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../redux/store';

const AdminRoute: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  return isAuthenticated && user?.role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;