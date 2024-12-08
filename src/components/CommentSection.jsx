// src/components/CommentSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Change the URL to your backend deployed on Render
        const response = await axios.get('https://discussion-backend-1.onrender.com/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
     
    </div>
  );
};

export default CommentSection;
