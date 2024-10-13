import fs from "fs";
import path from "path";
import BlogList from "../components/BlogList/BlogList";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blog = async () => {
  // Resolve the path to the local JSON file
  const filePath = path.join(process.cwd(), "public", "./posts.json");

  // Read and parse the JSON file
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts: Post[] = JSON.parse(jsonData);

  return <BlogList posts={posts} />;
};

export default Blog;
