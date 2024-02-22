import { useRouter
 } from "next/router"
const PostDetail = () => {
    const router = useRouter();
    const postId = router.query.postId;
  return (
    <h1>Details about post {postId}</h1>
  )
}

export default PostDetail