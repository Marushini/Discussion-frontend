import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DiscussionPage from './components/DiscussionPage'; // Add this import
import PostForm from './components/PostForm'; // Or add PostForm if you want to use it instead

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/discussion" element={<DiscussionPage />} /> {/* Add this route */}
        <Route path="/post-form" element={<PostForm />} /> {/* Or use this for PostForm */}
      </Routes>
    </Router>
  );
};

export default App;
