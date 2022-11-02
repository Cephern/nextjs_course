import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Misc stuff on Next.js" />
      </Head>
      <h1 className="content">About</h1>;
    </>
  );
}

About.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
