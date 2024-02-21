import { useRouter } from 'next/router'
import Link from 'next/link'

const Home = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log('Placing your order');
        router.replace('/product')
    }
  return (<div>
    <h1>Home Page</h1><div>
    <Link href="/blog">Blog</Link></div><div>
    <Link href="/product">Products</Link></div>
    <button onClick={handleClick}>
        Place Order
    </button>
    </div>
  )
}

export default Home