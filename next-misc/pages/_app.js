import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "/styles/globals.css";
import "/styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Misc</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
