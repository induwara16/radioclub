import Head from "next/head";
import { Sora } from 'next/font/google';

import landing_bg from '../images/landing-bg.jpg';
import signup_bg from '../images/signup-bg.png';

import Cover from "../components/Cover";
import SignupForm from "../components/SignupForm";

import { attributes as about, react as AboutBlock } from '../content/about.md'

const sora = Sora({ subsets: ['latin'], weight: '700' });


export default function Index({ }) {
  const { tic, board } = about;

  return (
    <>
      <Head>
        <title key='title'>The Radio Club - Royal College</title>
        <meta key='og-title' property="og:title" content="The Radio Club - Royal College" />
      </Head>

      <Cover
        src={landing_bg}
        overlayclass="min-h-screen bg-black after:bg-gray-800 after:bg-opacity-70"
        imgclass="opacity-80 !fixed"
        containerclass="text-center text-white my-auto px-8 sm:px-16 py-12 sm:py-20">

        <h2 className="text-2xl font-medium opacity-70 mb-8 sm:mb-12">THE RADIO CLUB OF ROYAL COLLEGE</h2>
        <h2 className={`${sora.className} text-2xl sm:text-3xl mb-3 sm:mb-4`}>EXPERIENCE THE IMMERSIVE</h2>
        <h1 className={`${sora.className} text-4xl sm:text-6xl break-words mb-10 sm:mb-16`}>TECHNOLOGY</h1>

        <div className="flex max-sm:flex-col max-sm:max-w-40 mx-auto justify-center gap-4 sm:gap-6">
          <a href="/#about" className="btn btn-outline">ABOUT US</a>
          <a href="/#signup" className="btn btn-fill">SIGN UP</a>
        </div>
      </Cover>

      <section id="about" className="bg-gray-850 prose-h1:!text-transparent prose-h1:bg-gradient-to-r prose-h1:from-sky-600 prose-h1:to-cyan-500 prose-h1:mr-auto prose-h1:bg-clip-text cols-2">
        <div className="prose-p:text-lg">
          <h1 className="!mb-5">The Radio Club</h1>
          <AboutBlock />
        </div>
        <div className="prose-p:!mb-8 prose-h1:!mb-4">
          <div>
            <h1>Our Vision</h1>
            <p>To inspire young Royalists in many fields of radio and technology to make them capable of working with various technologies and create a platform where they can motivate themselves to research and think new, rather than recreating which is currently practiced in the country.</p>
          </div>
          <div>
            <h1>Our Mission</h1>
            <p>To create an atmosphere where the students will be able to learn different fields of radio and technology. To integrate inovate and enhance the knowledge of the schooling community of Royal College, then use their imagination and innovative skills to conduct research at a student level.</p>
          </div>
          <div>
            <h1>Office Bearers</h1>
            <ul>
              <li><span className="font-medium mr-1">Teacher-in-Charge:</span> {tic}</li>
              {board.map(function (member) {
                return (<li key={member.position} className="!m-0"><span className="font-medium mr-1">{member.position}:</span> {member.name}</li>);
              })}
            </ul>
          </div>
        </div>
      </section>

      <Cover
        id="signup"
        src={signup_bg}
        imgclass='opacity-20'
        overlayclass="bg-gray-950 bg-opacity-85 after:bg-gray-850 after:bg-opacity-60">

        <div className="prose-p:!mt-1 cols-2">
          <div className="flex flex-col">
            <h1>Join RCRC Now!</h1>
            <p className="text-xl">Fill the following form to join The Radio Club of Royal College</p>
            <p>We welcome all Royalists from grade 6 and above. Join RCRC to gain vital experience and skills on Event Management, Audio Engineering and Compering!</p>
            <p>If you have any inquiries regarding the club please feel free to contact us</p>
            <a className="btn btn-fill mr-auto mt-5" href='#contact'>CONTACT US</a>
          </div>
          <div className="flex flex-col my-auto">
            <SignupForm />
          </div>
        </div>
      </Cover>
    </>
  );
}
