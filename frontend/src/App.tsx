import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import AdminRoute from './components/AdminRoute';
import EditNews from './components/EditNews'; // Import the new edit component
import './App.css';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <main className='main-content'>
          <Routes>
            {/* Public Routes */}
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/news/:id' element={<NewsDetail />} />

            {/* Protected Admin Routes */}
            <Route element={<AdminRoute />}>
              <Route path='/admin' element={<AdminDashboard />} />
              <Route path='/admin/news/edit/:id' element={<EditNews />} /> {/* Add edit route */}
            </Route>

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;