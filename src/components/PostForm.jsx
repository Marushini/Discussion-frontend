import React, { useState } from 'react';

const PostForm = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]); // To store comments

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // Add the new comment to the comments list
      setComments([...comments, comment]);
      setComment(''); // Clear the input after submission
    }
  };

  // Inline styles for the form and comments section
  const styles = {
    postForm: {
      margin: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
    },
    h2: {
      textAlign: 'center',
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '10px',
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    commentsContainer: {
      marginTop: '20px',
      color:'#000'
    },
    commentBox: {
      backgroundColor: '#fff',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    commentText: {
      margin: '0',
      fontSize: '14px',
    },
  };

  return (
    <div className="post-form" style={styles.postForm}>
      <h2 style={styles.h2}>Post a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment..."
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Submit Comment</button>
      </form>

      <div className="comments-container" style={styles.commentsContainer}>
        <h3>Comments:</h3>
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((c, index) => (
            <div key={index} className="comment-box" style={styles.commentBox}>
              <p style={styles.commentText}>{c}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostForm;
