import Image from 'next/image';
import { useState } from 'react';

import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

import Lightbox from 'yet-another-react-lightbox';
import { Zoom, Thumbnails, Captions } from 'yet-another-react-lightbox/plugins';

import { TbZoomInFilled } from 'react-icons/tb';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css'

export default function Gallery({ pics, hide = false }) {
  const [index, setIndex] = useState(-1);

  const photos = pics.map(function (pic, i) {
    const img = require(`../content/gallery/${pic.src}`);

    return {
      src: img,
      alt: pic.title,
      title: pic.title,
      description: pic.date ? new Date(pic.date).toDateString() : undefined,
      width: img.default.width,
      height: img.default.height,
      key: `${pic.title}-${i}`
    };
  });


  function NextJSSlide({ slide: { width, height, key, ...slide } }) {
    return (
      <div style={{ width, height }}>
        <Image {...slide} objectFit='contain' fill />
      </div>);
  }

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={250}
        componentsProps={{ container: { className: 'not-prose mt-12 mb-10 md:mb-14' } }}
        render={{
          image: function (props, { index, height }) {
            return (
              <div className={`flex bg-black border relative h-full border-white border-opacity-50 gallery-img ${index > 3 && hide ? 'max-sm:hidden' : ''}`} style={{ height }}>
                <Image {...props} fill objectFit='cover' />
                <span className='z-10 opacity-0 pointer-events-none text-2xl text-sky-600 m-auto !p-2 rounded-xl transition'><TbZoomInFilled /></span>
              </div>
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