import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (<div>
    <h1>Home Page</h1><div>
    <Link href="/blog">Blog</Link></div><div>
    <Link href="/product">Products</Link></div>
    </div>
  )
}

export default Home