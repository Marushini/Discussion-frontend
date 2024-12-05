import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // optional, if you have a global CSS file
import App from './App'; // Import your main App component

// Render the App component into the root div in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
