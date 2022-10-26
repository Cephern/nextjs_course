import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `http://localhost:4000/products/${params.productId}`
  ).then((res) => res.json());

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page form /posts/${params.productId}`);

  return { props: { product: data }, revalidate: 10 };
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:4000/products").then((res) =>
    res.json()
  );

  return {
    paths: data.map((product) => ({
      params: { productId: product.id.toString() },
    })),
    fallback: true,
  };
}
