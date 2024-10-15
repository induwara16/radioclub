import Image from 'next/image';
import { useState } from 'react';

import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

import Lightbox from 'yet-another-react-lightbox';
import { Zoom, Thumbnails, Captions } from 'yet-another-react-lightbox/plugins';

import ScrollAnimation from 'react-animate-on-scroll';

import { TbZoomInFilled } from 'react-icons/tb';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css'

export default function Gallery({ pics, hide = false }) {
  const [index, setIndex] = useState(-1);

  const photos = pics.map(function (pic, i) {
    const src = require(`../content/gallery/${pic.src}`);

    const desc = (
      <>
        {pic.date && new Date(pic.date).toDateString()}
        {pic.date && pic.description && <br />}
        {pic.description}
      </>
    );

    return {
      src,
      description: (pic.date || pic.description) && desc,
      alt: pic.title,
      title: pic.title,
      width: src.default.width,
      height: src.default.height,
      key: `${pic.title}-${i}`
    };
  });


  function NextJSSlide({ slide: { width, height, key, ...slide } }) {
    return (
      <div style={{ width, height }}>
        <Image {...slide} alt='' objectFit='contain' fill />
      </div>);
  }

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={250}
        componentsProps={{ container: { className: 'not-prose md:my-4' } }}
        render={{
          image: function (props, { index, height }) {
            return (
              <ScrollAnimation animateOnce animateIn='animate__fadeIn' className={`flex bg-black border relative h-full border-white border-opacity-50 gallery-img ${index > 3 && hide ? 'max-sm:hidden' : ''}`} style={{ height }}>
                <Image {...props} fill objectFit='cover' alt='' />
                <span className='z-10 opacity-0 pointer-events-none text-2xl text-sky-600 m-auto !p-2 rounded-xl transition'><TbZoomInFilled /></span>
              </ScrollAnimation>
            );
          }
        }}
        onClick={function ({ index }) {
          setIndex(index);
        }}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom, Captions]}
        render={{
          slide: NextJSSlide,
          thumbnail: NextJSSlide
        }}
      />
    </>
  );
}
