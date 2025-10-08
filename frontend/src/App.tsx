import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
        <Navbar />
        <main className="main-content">
          <MainRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;