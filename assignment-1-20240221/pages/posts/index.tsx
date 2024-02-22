import Link from 'next/link'
import React from 'react'
interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
const PostList = ({posts}) => {
    return <><h1>List of posts!</h1>
    {
      posts.map((post: Post) => {
        return (<div key={post.id}>
            <Link href={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
        </div>)
      })
    }</>
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    
    return {
      props: {
        posts: data
      }
    }
  }