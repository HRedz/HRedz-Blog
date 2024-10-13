"use client";

import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogCardProps {
  post: Post;
  onRead: (post: Post) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => (
  <div className="card lg:card-side bg-base-200 shadow-xl shadow-base-300 my-7 mx-5">
    <div className="card-body">
      <h2 className="card-title">{post.title}</h2>
      <p>{post.body}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => onRead(post)}>
          Read
        </button>
      </div>
    </div>
  </div>
);

export default BlogCard;
