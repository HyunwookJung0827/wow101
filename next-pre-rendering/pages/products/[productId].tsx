import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>
        {product.id} {product.title}
      </h1>
      <p>{product.body}</p>
    </>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}
export async function getStaticPaths() {
    return {
      paths: [{ params : {productId: '1'} }],
      fallback: true
    };
};

