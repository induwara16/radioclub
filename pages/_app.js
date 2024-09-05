import Layout from "../components/Layout";

export default function Radio({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}