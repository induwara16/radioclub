import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="keywords" content="radioclub, royal college" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta charSet='utf-8' />

                <meta property="og:title" content="The Radio Club of Royal College" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.siteurl} />
                <meta property="og:image" content={`${process.env.siteurl}/favicon.png`} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel='icon' href={`${process.env.siteurl}/favicon.ico`} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}