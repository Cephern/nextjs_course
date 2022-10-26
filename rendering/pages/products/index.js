import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <>
      <h1>List of Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:4000/products").then((res) =>
    res.json()
  );

  return { props: { products: data }, revalidate: 10 };
}
