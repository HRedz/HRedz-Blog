"use client";

import React from "react";
import BlogPost from "../BlogPost/BlogPost";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogPostOverlayProps {
  post: Post;
  onClose: () => void;
}

const BlogPostOverlay: React.FC<BlogPostOverlayProps> = ({ post, onClose }) => (
  <div className="modal modal-open">
    <div className="modal-box relative">
      <button
        className="btn btn-sm btn-circle absolute right-2 top-2"
        onClick={onClose}
      >
        ✕
      </button>
      <BlogPost post={post} />
    </div>
  </div>
);

export default BlogPostOverlay;
