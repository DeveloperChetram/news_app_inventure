import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../redux/authSlice';

const AdminRoute = () => {
  const user = useSelector(selectCurrentUser);

  // If the user is logged in and their role is 'admin', allow access.
  // Otherwise, navigate them to the login page.
  return user?.role === 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;