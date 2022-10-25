import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((res) => res.json());

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page form /posts/${params.postId}`);

  return { props: { post: data } };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return {
    paths: data
      .slice(0, 3)
      .map((post) => ({ params: { postId: post.id.toString() } })),
    fallback: true,
  };
}
