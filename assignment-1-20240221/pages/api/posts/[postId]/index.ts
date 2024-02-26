
export default function handler(req, res) {
    const {postId} = req.query;
    const post = posts.find( post => post.id === parseInt(postId))
    // parseInt to make postId string to a number
    res.status(200).json(post)
}