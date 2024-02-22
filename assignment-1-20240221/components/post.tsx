import React from 'react'

const Post = ({post}) => {
  return (
    <>
    <p>{post.id}</p>
    <p>{post.title}</p></>
  )
}

export default Post