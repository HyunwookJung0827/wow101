import { comments } from "@/data/comments";
export default function handler(req, res) {
    const {postId} = req.query;
    // parseInt to make postId string to a number
    const data = comments.filter( comment => comment.postId === parseInt(postId))
    res.status(200).json(data)
}