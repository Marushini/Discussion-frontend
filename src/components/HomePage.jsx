import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
                       
const HomePage = () => {
  return (  
    <div className="home-page">
      <header className="header">
        <nav className="navbar">
       
        </nav>
      </header>

      <section className="main-content">
        <h1 className="title">Welcome to the Discussion Forum</h1>
        
        <p className="description">Read, reply, and engage in dynamic discussions with users worldwide.</p>

        <div className="action-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Discussion Forum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
