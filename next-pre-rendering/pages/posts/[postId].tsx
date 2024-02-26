import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
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
// feasible solution we would want is an array of 100 objects where each object contains a params key which in turn contains an id key.
// We can reuse api/posts to get all the post Ids and then use getStaticPaths to pre-render all the pages.
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // })
  
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    // paths,
    // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
    fallback: "blocking",
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
