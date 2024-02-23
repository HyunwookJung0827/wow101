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
export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: "1" } },
            { params: { postId: "2" } },
            { params: { postId: "3" } },
        ],
        // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
        fallback: false,
        };
}
export async function getStaticProps(context) {
  const { params } = context;
  // Basically saying that we as a developer pre-decide which pages to pre-render
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
