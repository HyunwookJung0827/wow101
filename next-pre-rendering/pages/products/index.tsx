function ProductList({ products }) {
  return (
    <ul>
        <h1>List of Products</h1>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("https://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}