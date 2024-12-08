import React from 'react';
import CommentSection from './CommentSection';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.content}</h3>
          <CommentSection postId={post._id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
