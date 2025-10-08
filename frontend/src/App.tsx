import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        {/* <Navbar /> */}
        <main className='main-content'>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;