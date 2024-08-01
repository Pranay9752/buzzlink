// components/InfluencerFeed.js
"use client";

import React, { useState } from "react";
import InfluencerPost from "./InfluencerPost";

export default function InfluencerFeed({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (postId, isLiked) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: isLiked ? post.likes + 1 : post.likes - 1 }
        : post
    ));
  };

  const handleAddComment = ({postId, comment}) => {
    console.log('postId, comment: ', postId, comment);
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { username: "CurrentUser", text: comment }] }
        : post
    ));
  };

  return (
    <>
      {posts.map((post) => (
        <InfluencerPost 
          key={post.id} 
          post={post} 
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      ))}
    </>
  );
}