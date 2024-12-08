import React, { useState, useEffect } from "react";
import axios from "axios";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  // Fetch comments when the page loads
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("https://discussion-backend-1.onrender.com/api/comments", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, []);

  const handlePostComment = async () => {
    try {
      await axios.post(
        "https://discussion-backend-1.onrender.com/api/comments",
        { text: comment },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setComment(""); // Clear the comment input field
      // Fetch the latest comments after posting a new comment
      const response = await axios.get("https://discussion-backend-1.onrender.com/api/comments", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = (commentId) => {
    setLikes({ ...likes, [commentId]: (likes[commentId] || 0) + 1 });
  };

  const handleDislike = (commentId) => {
    setDislikes({ ...dislikes, [commentId]: (dislikes[commentId] || 0) + 1 });
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handlePostComment}>Post Comment</button>
      </div>

      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            <button onClick={() => handleLike(comment._id)}>
              Like {likes[comment._id] || 0}
            </button>
            <button onClick={() => handleDislike(comment._id)}>
              Dislike {dislikes[comment._id] || 0}
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default CommentsPage;
