import "../styles/globals.css";
import Head from "next/head";
import "mapbox-gl/dist/mapbox-gl.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Uber</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
