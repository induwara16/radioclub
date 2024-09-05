import Layout from "../components/Layout";

import '../css/global.css';

export default function Radio({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}