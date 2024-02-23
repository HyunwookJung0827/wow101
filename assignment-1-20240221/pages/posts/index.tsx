import Link from "next/link";
import React from "react";
import { useState } from "react";
interface Post {
  id: number;
  title: string;
  body: string;
}
const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <>
      <button onClick={fetchPosts}>Load Posts</button>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.id} {post.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default PostsPage;
