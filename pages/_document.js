import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="keywords" content="radioclub, royal college" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta charSet='utf-8' />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.URL} />
        <meta property="og:image" content={`${process.env.URL}/favicon.png`} />

        <link rel='icon' href={`${process.env.URL}/favicon.ico`} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}