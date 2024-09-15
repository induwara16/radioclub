import Image from 'next/image';

import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

export default function Gallery({ pics }) {
  const photos = pics.map(function (pic) {
    const img = require(`../content/gallery/${pic.src}`);
    return {
      src: img,
      alt: pic.title,
      width: img.default.width,
      height: img.default.height
    };
  });

  return (
    <RowsPhotoAlbum
      photos={photos}
      targetRowHeight={200}
      componentsProps={{ container: { className: 'not-prose mt-12 mb-14' } }}
      render={{
        button: function (props) {
          return (
            <h1>Skibusy</h1>
          );
        },
        image: function (props) {
          return (
            <div className='bg-black gallery-img'>
              <Image {...props} />
            </div>
          );
        }
      }}
    />
  );
}