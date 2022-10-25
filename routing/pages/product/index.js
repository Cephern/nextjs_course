import Link from "next/link";

function ProductList({ productId = 4 }) {
  return (
    <>
      <Link href="/">Home</Link>
      <br />
      <h2>
        <Link href={`/product/${productId}`}>{`Product ${productId}`}</Link>
      </h2>
      <h2>
        <Link href={"/product/2"}>Product 2</Link>
      </h2>
      <h2>
        <Link href={"/product/3"} replace>
          Product 3
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
