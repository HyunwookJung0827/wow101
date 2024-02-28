const PostDetail = ({ post, comments }) => {
  // Now get the comments as well for that post.postId
  //const [comments, setComments] = useState([]);

  return (
    <>
      <h1>
        ID: {post.id} TITLE: {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h2>Comments</h2>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <hr />
            <h3>{comment.email} PostID: {comment.postId}</h3>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // You should not call an api route for pre-rendering
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  // Recieve a response array of comments objects and predefine the type to use filter function

  const commentResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentData = await commentResponse.json();
  const comments = commentData.filter( (comment) => comment.postId === parseInt(data.id));

  return {
    props: {
      post: data,
      comments,
    },
  };
}
