import Head from "next/head";
import Image from "next/image";

import { Sora } from 'next/font/google';

import landing_bg from '../images/landing-bg.jpg';

const sora = Sora({ subsets: ['latin'], weight: '700' });

export default function Index({ }) {
  return (
    <>
      <Head>
        <title key='title'>The Radio Club - Royal College</title>
        <meta key='og-title' property="og:title" content="The Radio Club - Royal College" />
      </Head>

      <section className="flex flex-col text-center min-h-screen justify-center overflow-hidden bg-black after:bg-gray-800 after:bg-opacity-70 bg-overlay">
        <Image
          className="opacity-80 !fixed"
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
      </section>

      <section id="about" className="bg-gray-850 flex max-md:flex-col prose-h1:text-transparent prose-h1:bg-gradient-to-r prose-h1:from-sky-600 prose-h1:to-cyan-500 prose-h1:mr-auto prose-h1:bg-clip-text prose-h1:mb-5 gap-14 md:gap-16 lg:gap-24 px-12 py-16 sm:px-24 lg:px-32 md:py-20 prose-p:!mb-2">
        <div className="flex flex-col prose basis-1/2 prose-p:text-lg">
          <h1>The Radio Club</h1>
          <p>Royal College Radio Club was inaugurated in the year of 1925 as the Radio Listeners’ Club by the College Prefects during the tenure of then principal of Royal College – Mr. H.L Reed, making it one of the school’s oldest clubs. Since then, the club has been responsible for pioneering various initiatives.</p>
          <p>Members of the club maintain and operate much of the audiovisual assets at the College, including the sound systems and the school’s PA systems. It also provides services to other clubs and societies on a frequent basis on matters which concern electronics, audio or video, and liaise with other schools on these matters as well.</p>
          <p>The Radio Club also organizes various events throughout each year aimed to both serve the College as well as to improve the skills and capabilities of its members. These projects include FM Royal, which is the first ever school-managed FM radio station to operate in South Asia.</p>
        </div>
        <div className="flex flex-col prose basis-1/2">
          <div>
            <h1>Our Vision</h1>
          </div>
          <div>
            <h1>Our Mission</h1>
          </div>
          <div>
            <h1>Our Office Bearers</h1>
            <ul className="prose-li:m-0">
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}