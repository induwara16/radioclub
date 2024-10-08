import Head from "next/head";
import Layout from "../components/Layout";

import 'animate.css';
import '../css/global.css';

export default function Radio({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}