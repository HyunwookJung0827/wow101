import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
};
export default Post;

export async function getStaticPaths(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    paths: [
      {
        params: { postId: data.id.toString() },
      },
    ],
    fallback: false,
  };
}
