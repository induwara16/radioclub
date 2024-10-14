import Image from 'next/image';
import Link from 'next/link';

import ClampLines from 'react-clamp-lines';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { TiCalendar } from "react-icons/ti";

export function ProjectDate({ start, end }) {
  return (
    <label className="flex my-auto text-gray-400 text-sm mr-1.5 font-semibold">
      <TiCalendar className="text-lg mr-1" />
      {start} {end && <><span className="mx-1.5">—</span> {end}</>}
    </label>
  );
}

export function ProjectStatus({ status }) {
  return (
    <label className={`${status === 'concluded' ? 'bg-sky-600' : status === 'ongoing' ? 'bg-green-500' : 'bg-gray-500'} px-1.5 py-1 text-xs not-prose text-white rounded mr-auto font-semibold my-auto`}>
      {status.toUpperCase()}
    </label>
  );
}

export default function ProjectCarousel({ projects }) {
  return (
    <Carousel
      itemClass='!list-none !p-0'
      arrows
      autoPlay
      autoPlaySpeed={5000}
      shouldResetAutoplay
      sliderClass='!p-0 !mb-7'
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1240
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 844,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1239,
            min: 845
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind
      rewindWithAnimation
      slidesToSlide={1}
      swipeable
      ssr
      showDots
      dotListClass='not-prose'
    >
      {projects.map(function ({ title, featured, status, text, name, start, end }, i) {
        return (
          <div key={`project-${i}`} className='bg-neutral-800 m-1 xs:m-3 shadow-2xl border border-white border-opacity-25 transition hover:bg-neutral-700'>
            <div className='h-48 relative'>
              <Image
                className='!mt-0 border-b border-opacity-25 border-white'
                layout='fill'
                objectPosition='center'
                objectFit='cover'
                alt={title}
                src={require(`../content/gallery/${featured}`)} />
            </div>
            <div className='px-4 py-3 flex flex-col'>
              <div className='flex items-center mb-2 mt-4'>
                <h2 className='!my-0 mr-3 max-xs:!text-[1.3rem]'>{title}</h2>
                <ProjectStatus status={status} />
              </div>

              <ProjectDate start={start} end={end} />
              <ClampLines text={text} id={name} className='text-justify text-gray-400 my-5' buttons={false} lines={5} />
              <Link href={`/projects/${name}`} className='btn btn-fill !py-2 mb-2'>READ MORE</Link>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
