import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Home/Welcome";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>ChRIS Store</title>
        <meta name="description" content="ChRIS Store landing page" />
        <meta name="theme-color" content="#00659c" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00659c" />
      </Head>
      <Navbar />
      <Welcome/>
      <Footer/>
    </>
  );
};

export default Home;
