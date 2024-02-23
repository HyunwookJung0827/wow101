import { useRouter } from "next/router";
import { useState } from "react";
const PostDetail = () => {
  const [post, setPost] = useState({
    postId: null,
    id: null,
    title: "",
    body: "",
  });
  const [comments, setComments] = useState([
    {
      postId: null,
      id: null,
      name: "",
      email: "",
      body: "",
    },
  ]);
  const router = useRouter();
  const postId = router.query.postId;
  const fetchPost = async () => {
    const response = await fetch(`/api/posts/${postId}`);
    const data = await response.json();
    setPost(data);
  };
  const fetchComments = async () => {
    const response = await fetch(`/api/posts/${postId}/comments`);
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchPost}>Load Posts {postId}</button>

      <div>
        <p>id: {post.id}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </div>

      <button onClick={fetchComments}>Load Comments</button>
      
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            ({comment.email}): {comment.body}
          </div>
        );
      })}
    </>
  );
};

export default PostDetail;
