import Head from "next/head";
import Navbar from "../components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>ChRIS Store</title>
        <meta name="description" content="ChRIS Store landing page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar/>
    </>
  );
};

export default Home;
