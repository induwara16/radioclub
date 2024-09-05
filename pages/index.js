import Head from "next/head";

export default function Index({ posts, globalData }) {
  return (
    <>
      <Head>
        <title key='title'>The Radio Club - Royal College</title>
        <meta key='og-title' property="og:title" content="The Radio Club - Royal College" />
      </Head>

      <section className="text-center">
        <h3>THE RADIO CLUB OF ROYAL COLLEGE</h3>
        <h2>EXPERIENCE THE</h2>
        <h1>IMMERSIVE TECHNOLOGY</h1>
      </section>
    </>
  );
}