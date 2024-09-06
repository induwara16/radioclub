import Head from "next/head";
import Image from "next/image";

import { Sora } from 'next/font/google';

import landing_bg from '../images/landing-bg.jpg';

const sora = Sora({ subsets: ['latin'], weight: '700' });

export default function Index() {
  return (
    <>
      <Head>
        <title key='title'>The Radio Club - Royal College</title>
        <meta key='og-title' property="og:title" content="The Radio Club - Royal College" />
      </Head>

      <div className="flex flex-col text-center min-h-screen justify-center overflow-hidden bg-black after:bg-slate-800 after:bg-opacity-65 bg-overlay">
        <Image
          className="opacity-80"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={landing_bg} />

        <div className="z-10 text-white my-auto px-8 sm:px-16 py-12 sm:py-20">
          <h2 className="text-2xl font-medium opacity-70 mb-8 sm:mb-12">THE RADIO CLUB OF ROYAL COLLEGE</h2>
          <h2 className={`${sora.className} text-2xl sm:text-3xl mb-3 sm:mb-4`}>EXPERIENCE THE IMMERSIVE</h2>
          <h1 className={`${sora.className} text-4xl sm:text-6xl break-words mb-10 sm:mb-16`}>TECHNOLOGY</h1>

          <div className="flex max-sm:flex-col max-sm:max-w-40 mx-auto justify-center gap-4 sm:gap-6">
            <a href="/#about" className="btn btn-outline">ABOUT US</a>
            <a href="/#signup" className="btn btn-fill">SIGN UP</a>
          </div>
        </div>
      </div>

      <div id="about" className="bg-slate-800 py-96"></div>
    </>
  );
}