
import Link from "next/link";
import React from "react";
interface Post {
  id: number;
  title: string;
  body: string;
}
const PostsPage = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.id} {post.title}
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default PostsPage;

export async function getStaticProps() {
  const response = await fetch("/api/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
