import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://discussion-backend-2.onrender.com/api/posts/${postId}/comments`, { text: comment });
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
