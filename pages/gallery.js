import Head from 'next/head';

import { Header } from '../components/Cover';
import GalleryComponent from '../components/Gallery';

import { attributes as _gallery } from '../content/gallery.md';

export default function Gallery({ gallery }) {
  return (
    <>
      <Head>
        <title key='title'>Gallery - The Radio Club</title>
        <meta key='og-title' property="og:title" content="Gallery - The Radio Club" />
      </Head>

      <Header text='GALLERY' />

      <section className='bg-neutral-900 cols-1'>
        <GalleryComponent pics={gallery} />
      </section>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      gallery: _gallery.piclist.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      })
    }
  };
}