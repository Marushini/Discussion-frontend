import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostList from './PostList';

const DiscussionPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://discussion-backend-1.onrender.com/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Discussion Forum</h1>
      <PostForm refreshPosts={fetchPosts} />
      <PostList posts={posts} />
    </div>
  );
};

export default DiscussionPage;
