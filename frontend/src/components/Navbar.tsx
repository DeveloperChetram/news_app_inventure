import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>NewsApp</Link>
      </div>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;