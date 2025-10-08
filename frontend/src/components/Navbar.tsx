import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logOut } from '../redux/authSlice';
import '../styles/Navbar.css';

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    // Optionally, you can add an API call here to invalidate the cookie on the backend
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>NewsApp</Link>
      </div>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        {user?.role === 'admin' && <Link to='/admin'>Admin</Link>}
        
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={handleLogout} className='nav-button'>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;