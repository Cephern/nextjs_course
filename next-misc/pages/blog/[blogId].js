import Head from "next/head";

export default function BlogList({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
