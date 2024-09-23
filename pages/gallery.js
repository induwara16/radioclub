import Head from 'next/head';

import Cover from '../components/Cover';
import GalleryComponent from '../components/Gallery';

import landing_bg from '../images/landing-bg.jpg';
import { attributes as gallery } from '../content/gallery.md';

export default function Gallery() {
  return (
    <>
      <Head>
        <title key='title'>Gallery - The Radio Club</title>
        <meta key='og-title' property="og:title" content="Gallery - The Radio Club" />
      </Head>

      <Cover
        src={landing_bg}
        overlayclass="bg-black after:bg-gray-800 after:bg-opacity-70"
        imgclass="opacity-80 !object-center !fixed"
        containerclass="text-center text-white my-auto px-5 xs:px-8 sm:px-16 py-12 sm:py-16">

        <h2 className="text-6xl font-bold">GALLERY</h2>
      </Cover>

      <section className='bg-neutral-900 cols-1'>
        <GalleryComponent pics={gallery.piclist} />
      </section>
    </>
  );
}