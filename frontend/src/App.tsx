import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar'; // Import the Navbar component
// import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Navbar /> {/* Uncomment this line */}
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/news/:id' element={<NewsDetail />} />
            <Route path='/admin' element={<AdminDashboard />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;