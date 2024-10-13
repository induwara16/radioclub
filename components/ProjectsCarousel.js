import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { TiCalendar } from 'react-icons/ti';

export default function ProjectCarousel({ projects }) {
  const router = useRouter();

  return (
    <Carousel
      itemClass='!list-none !p-0'
      arrows
      autoPlaySpeed={3000}
      sliderClass='!p-0'
      draggable
      infinite
      keyBoardControl
      focusOnSelect
      minimumTouchDrag={80}
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
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
            max: 1024,
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
    >
      {projects.map(function (project, i) {
        return (
          <div
            key={`project-${i}`}
            className='bg-neutral-800 m-3 cursor-pointer shadow-2xl hover:scale-105 transition'
            onClick={function () { router.push(`/projects/${project.slug}`); }}>
            <div className='h-48 relative pointer-events-none'>
              <Image
                className='!mt-0'
                layout='fill'
                objectPosition='center'
                objectFit='cover'
                alt={project.title}
                src={require(`../content/gallery/${project.featured}`)} />
            </div>
            <div className='px-4 py-3 flex flex-col'>
              <div className='flex items-center mb-2 mt-4'>
                <h2 className='!my-0 mr-3'>{project.title}</h2>
                <label className={`${project.status === 'concluded' ? 'bg-sky-600' : project.status === 'ongoing' ? 'bg-green-500' : 'bg-gray-500'} px-1.5 py-1 text-xs my-auto not-prose text-white rounded mr-auto font-semibold`}>
                  {project.status.toUpperCase()}
                </label>
              </div>
              <label className="flex my-auto text-gray-400 text-sm mr-2 font-semibold">
                <TiCalendar className="text-lg mr-1" /> {project.start} {project.end && <><span className="mx-1.5">—</span> {project.end}</>}
              </label>
              <p className='text-justify text-gray-400'>{project.text}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}