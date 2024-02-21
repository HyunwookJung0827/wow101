import { useRouter
} from "next/router"
const ProductDetail = () => {
   const router = useRouter();
   const {productId, reviewId} = router.query;
 return (
   <h1>Review {reviewId} of the product {productId}</h1>
 )
}

export default ProductDetail