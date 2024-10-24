import Head from "next/head";
import Link from 'next/link';
import { Sora } from 'next/font/google';

import ScrollAnimation from "react-animate-on-scroll";

import excerpts from 'excerpts';

import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from 'react-icons/ti';

import { TbMail, TbMapPin, TbPhone } from "react-icons/tb";

import landing_bg from '../images/landing-bg.jpg';

import Cover, { OverlayCover } from "../components/Cover";
import Gallery from "../components/Gallery";
import ProjectCarousel from "../components/ProjectsCarousel";
import Form, { Field } from "../components/Form";

import { getProjectProps, getProjects } from "../util/projects";
import { signup, contact } from "../util/schemas";

import { attributes as _about, react as AboutBlock } from '../content/about.md';
import { attributes as _social } from '../content/social.md';
import { attributes as _gallery } from '../content/gallery.md';
import { attributes as _contact } from '../content/contact.md';

const sora = Sora({ subsets: ['latin'], weight: '700' });

export default function Index({ about, social, gallery, contact_info, projects }) {
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

        <ScrollAnimation animateIn="animate__slideInDown" animateOnce>
          <h2 className="text-2xl font-medium opacity-70 mb-8 sm:mb-12">THE RADIO CLUB OF ROYAL COLLEGE</h2>
          <h2 className={`${sora.className} text-2xl sm:text-3xl mb-3 sm:mb-4`}>EXPERIENCE THE IMMERSIVE</h2>
          <h1 className={`${sora.className} text-4xl sm:text-6xl break-words mb-10 sm:mb-16`}>TECHNOLOGY</h1>

          <div className="flex max-sm:flex-col max-sm:max-w-40 mx-auto justify-center gap-4 sm:gap-6">
            <a href="#about" className="btn btn-outline">ABOUT US</a>
            <a href="#signup" className="btn btn-fill">SIGN UP</a>
          </div>
        </ScrollAnimation>
      </Cover>


      <section id='projects' className="cols-1 bg-neutral-900 prose-h4:!mb-1 prose-h4:!text-gray-300/80">
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce>
          <h1 className="!mb-3">The Year</h1>
          <ProjectCarousel projects={projects} />
        </ScrollAnimation>
      </section>

      <OverlayCover bg="bg-gray-950">
        <div className="cols-1 !gap-0">
          <ScrollAnimation animateIn="animate__slideInRight" animateOnce>
            <h1>Gallery</h1>
          </ScrollAnimation>

          <Gallery pics={gallery} hide />

          <ScrollAnimation animateIn="animate__zoomIn" animateOnce className="mt-4 xs:mt-8">
            <Link href='/gallery' className="btn btn-fill mx-auto">VIEW ALL PHOTOS</Link>
          </ScrollAnimation>
        </div>
      </OverlayCover>

      <section id="about" className="bg-neutral-900 prose-h1:!text-transparent prose-h1:bg-gradient-to-r prose-h1:from-sky-600 prose-h1:to-cyan-500 prose-h1:mr-auto prose-h1:bg-clip-text cols-2 !gap-y-6">
        <ScrollAnimation animateOnce animateIn="animate__slideInLeft" className="prose-p:md:text-lg prose-p:!mb-8">
          <h1 className="!mb-5">The Radio Club</h1>
          <AboutBlock />
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="animate__slideInRight" className="prose-p:!mb-8 prose-h1:!mb-4">
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
              <li><span className="font-medium mr-1">Teacher-in-Charge:</span><br className="xs:hidden" /> {tic}</li>
              {board.map(function (member) {
                return (<li key={member.position} className="!mx-0 lg:!my-0"><span className="font-medium mr-1">{member.position}:</span><br className="xs:hidden" /> {member.name}</li>);
              })}
            </ul>
          </div>
        </ScrollAnimation>
      </section>

      <OverlayCover bg="bg-[#1d1d1d] !bg-opacity-70">
        <div className="prose-p:!mt-1 cols-2">
          <ScrollAnimation animateOnce animateIn="animate__slideInLeft" className="max-md:mb-2 max-md:text-center">
            <h1>Join RCRC Now!</h1>
            <p className="text-xl">Fill the following form to join The Radio Club of Royal College</p>
            <p>We welcome all Royalists from grade 6 and above. Join RCRC to gain vital experience and skills on Event Management, Audio Engineering and Compering!</p>
            <p>If you have any inquiries regarding the club please feel free to contact us</p>
            <a className="btn btn-fill max-md:ml-auto mr-auto mt-5" href='#contact'>CONTACT US</a>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__slideInRight">
            <Form submit='JOIN US' api='signup' schema={signup}>
              <Field name='name' type="text">Your Name</Field>
              <Field name='class' type="text" >Your Class</Field>
              <Field name='whatsapp' type='text' className='mb-8'>WhatsApp No</Field>
            </Form>
          </ScrollAnimation>
        </div>
      </OverlayCover>

      <section className="cols-1 prose-p:text-lg prose-p:!my-0 bg-neutral-900">
        <ScrollAnimation animateOnce animateIn="animate__backInDown" className="pt-1">
          <h1>Follow Us On Social Media</h1>
          <p>Follow our social media pages to recieve the latest updates and news regarding projects and other important club events!</p>

          <div className="flex text-6xl justify-center mt-9 prose-a:transition hover:prose-a:scale-110 prose-a:duration-500 animate__animated animate__headShake animate__infinite animate__slower">
            <a target="_blank" href={social.fb}><TiSocialFacebookCircular className="text-blue-500" /></a>
            <a target="_blank" href={social.yt}><TiSocialYoutubeCircular className="text-red-600 mr-1" /></a>
            <a target="_blank" href={social.insta}><TiSocialInstagramCircular className="text-fuchsia-500" /></a>
          </div>
        </ScrollAnimation>
      </section>

      <OverlayCover bg='bg-gray-950'>
        <div className="cols-2 prose-h4:!mb-1 prose-h4:!text-gray-300/80" id="contact">
          <ScrollAnimation animateOnce animateIn='animate__slideInLeft' className="gap-y-4 max-md:text-center max-md:mb-2">
            <h1>Contact Us</h1>

            <div className="flex flex-col prose-a:max-md:mx-auto gap-y-2 prose-a:!text-white prose-a:!font-medium prose-a:text-lg prose-a:!mt-0 hover:prose-a:!underline prose-a:!no-underline">
              <a className="flex gap-x-2 hover:underline" target="_blank" href={`mailto:${contact_info.email}`}>
                <TbMail className="my-auto text-xl" /> {contact_info.email}
              </a>
              <a className="flex gap-x-2 hover:underline" href="https://royalcollege.lk" target="_blank">
                <TbMapPin className="my-auto text-xl" /> Royal College, Colombo 07
              </a>

              <div className="flex flex-col mt-2">
                <h4>STUDENT COORDINATOR</h4>
                {contact_info.name} - {contact_info.phone.replace(/\s/, '').replace(/(\d{3})(\d{3})(\d{4})/gm, '$1 $2 $3')}
              </div>
              <div className="flex flex-col">
                <h4>MEETINGS</h4>
                {contact_info.meetings.trim()}
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="animate__slideInRight">
            <Form submit='SEND MESSAGE' api='contact' schema={contact}>
              <Field name='name' type="text">Your Name</Field>
              <Field name='email' type="email" >Your E-mail</Field>
              <Field name='message' as="textarea" type='text' className='mb-8'>Message</Field>
            </Form>
          </ScrollAnimation>
        </div>
      </OverlayCover>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      gallery: _gallery.piclist.filter(function (pic) { return pic.featured; }),
      about: _about,
      social: _social,
      contact_info: _contact,

      projects: getProjects().map(function (name) {
        const { gallery, html, ...project } = getProjectProps(name);
        return { text: excerpts(html, { words: 150 }), ...project };
      }).filter(function (project) {
        return new Date(project.start).getFullYear() === new Date().getFullYear();
      }).sort(function (a, b) {
        if (a.pinned !== b.pinned)
          return a.pinned ? -1 : 1;

        if (a.status === 'ongoing' && b.status !== 'ongoing') {
          return -1;
        }

        if (a.status !== 'ongoing' && b.status === 'ongoing') {
          return 1;
        }

        return new Date(b.start) - new Date(a.start);
      })
    }
  };
}
