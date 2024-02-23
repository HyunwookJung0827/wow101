import { useRouter } from "next/router";
import { useState } from "react";
const PostDetail = () => {

}

export default PostDetail;

export async function getStaticProps() {
  const router = useRouter();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}