"use client";

import React, { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import BlogPostOverlay from "../BlogPostOverlay/BlogPostOverlay";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleRead = (post: Post) => {
    setSelectedPost(post);
  };

  const closeOverlay = () => {
    setSelectedPost(null);
  };

  return (
    <>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onRead={handleRead} />
      ))}

      {selectedPost && (
        <BlogPostOverlay post={selectedPost} onClose={closeOverlay} />
      )}
    </>
  );
};

export default BlogList;
