import Head from "next/head";
import Link from 'next/link';
import { Sora } from 'next/font/google';

import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from 'react-icons/ti';

import landing_bg from '../images/landing-bg.jpg';
import signup_bg from '../images/signup-bg.png';

import Cover from "../components/Cover";
import SignupForm from "../components/SignupForm";
import Gallery from "../components/Gallery";

import { attributes as _about, react as AboutBlock } from '../content/about.md';
import { attributes as _social } from '../content/social.md';
import { attributes as _gallery } from '../content/gallery.md';

const sora = Sora({ subsets: ['latin'], weight: '700' });

export default function Index({ about, social, gallery }) {
  const { vision, mission, tic, board } = about;

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
        containerclass="text-center text-white my-auto px-5 xs:px-8 sm:px-16 py-12 sm:py-20">

        <h2 className="text-2xl font-medium opacity-70 mb-8 sm:mb-12">THE RADIO CLUB OF ROYAL COLLEGE</h2>
        <h2 className={`${sora.className} text-2xl sm:text-3xl mb-3 sm:mb-4`}>EXPERIENCE THE IMMERSIVE</h2>
        <h1 className={`${sora.className} text-4xl sm:text-6xl break-words mb-10 sm:mb-16`}>TECHNOLOGY</h1>

        <div className="flex max-sm:flex-col max-sm:max-w-40 mx-auto justify-center gap-4 sm:gap-6">
          <a href="#about" className="btn btn-outline">ABOUT US</a>
          <a href="#signup" className="btn btn-fill">SIGN UP</a>
        </div>
      </Cover>

      <section id='projects' className="cols-1 bg-neutral-900 prose-h4:!mb-1 prose-h4:!text-gray-300/80">
        <div>
          <h1>Our Projects</h1>
        </div>
      </section>

      <Cover
        src={signup_bg}
        imgclass='opacity-20'
        overlayclass="bg-gray-950 bg-opacity-85 after:bg-gray-850 after:bg-opacity-60">

        <div className="cols-1">
          <div>
            <h1>Gallery</h1>
            <Gallery pics={gallery} hide />
            <Link href='/gallery' className="btn btn-fill mx-auto">VIEW ALL PHOTOS</Link>
          </div>
        </div>
      </Cover>

      <section id="about" className="bg-neutral-900 prose-h1:!text-transparent prose-h1:bg-gradient-to-r prose-h1:from-sky-600 prose-h1:to-cyan-500 prose-h1:mr-auto prose-h1:bg-clip-text cols-2 !gap-y-6">
        <div className="prose-p:md:text-lg prose-p:!mb-8">
          <h1 className="!mb-5">The Radio Club</h1>
          <AboutBlock />
        </div>
        <div className="prose-p:!mb-8 prose-h1:!mb-4">
          <div>
            <h1>Our Vision</h1>
            <p>{vision}</p>
          </div>
          <div>
            <h1>Our Mission</h1>
            <p>{mission}</p>
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
          <div>
            <h1>Join RCRC Now!</h1>
            <p className="text-xl">Fill the following form to join The Radio Club of Royal College</p>
            <p>We welcome all Royalists from grade 6 and above. Join RCRC to gain vital experience and skills on Event Management, Audio Engineering and Compering!</p>
            <p>If you have any inquiries regarding the club please feel free to contact us</p>
            <a className="btn btn-fill mr-auto mt-5" href='#contact'>CONTACT US</a>
          </div>
          <div>
            <SignupForm />
          </div>
        </div>
      </Cover>

      <section className="cols-1 prose-p:text-lg prose-p:!my-0 bg-neutral-900">
        <div className="pt-1">
          <h1>Follow Us On Social Media</h1>
          <p>Follow our social media pages to recieve the latest updates and news regarding projects and other important club events!</p>

          <div className="flex text-6xl justify-center mt-9 prose-a:transition hover:prose-a:scale-110 prose-a:duration-500 animate__animated animate__headShake animate__infinite animate__slower">
            <a target="_blank" href={social.fb}><TiSocialFacebookCircular className="text-blue-500" /></a>
            <a target="_blank" href={social.yt}><TiSocialYoutubeCircular className="text-red-600 mr-1" /></a>
            <a target="_blank" href={social.insta}><TiSocialInstagramCircular className="text-fuchsia-500" /></a>
          </div>
        </div>
      </section>

      <section className="cols-1 bg-[#1d1d1d] prose-h4:!mb-1 prose-h4:!text-gray-300/80" id="contact">
        <div>
          <h1>Get In Touch</h1>

        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      gallery: _gallery.piclist.filter(function (pic) { return pic.featured; }),
      about: _about,
      social: _social
    }
  };
}