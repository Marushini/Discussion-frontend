import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate instead of history

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://discussion-backend-1.onrender.com/api/auth/login', {
        email,
        password
      });

      // If login is successful, redirect to comments page
      if (response.data.message === 'Login successful') {
        navigate('/discussion');
      }

    } catch (error) {
      navigate('/discussion');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
