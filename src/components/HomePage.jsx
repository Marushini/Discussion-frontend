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
        <p className="description">
          This allows you to have discussion and interact with other with similar field of interest and clarify your doubts...
        </p>

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
