import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <div>
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <div className="prose">
      <p>{post.body}</p>
      {/* maybe use a markdown renderer here in the future */}
    </div>
  </div>
);

export default BlogPost;
