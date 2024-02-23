import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <>
      <div>
        <h1>List of Posts</h1>
      </div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              {/* When we have a child that is not an anchored tag */}{" "}
              <h2>
                {post.id} {post.title}
              </h2>
              <p>{post.body}</p>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
