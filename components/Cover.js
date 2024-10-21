import Image from "next/image";
import signup_bg from '../images/signup-bg.png';
import landing_bg from '../images/landing-bg.jpg'

export function Header({ text }) {
  return (
    <Cover
      src={landing_bg}
      overlayclass="bg-black after:bg-gray-800 after:bg-opacity-70"
      imgclass="opacity-80 !object-center !fixed"
      containerclass="text-center text-white my-auto px-5 xs:px-8 sm:px-16 py-8 xs:py-12 sm:py-16">

      <h2 className='text-4xl xs:text-5xl sm:text-6xl font-bold animate__animated animate__slideInDown'>
        {text}
      </h2>
    </Cover>
  );
}

export function OverlayCover({ bg, children }) {
  return (
    <Cover
      src={signup_bg}
      imgclass='opacity-20'
      overlayclass={`${bg} bg-opacity-85 after:bg-gray-850 after:bg-opacity-60`}>

      {children}
    </Cover>
  );
}

export default function Cover({ children, src, imgclass, overlayclass, containerclass, ...props }) {
  return (
    <section {...props} className={`flex flex-col ${overlayclass} relative after:absolute after:top-0 after:left-0 after:w-full after:h-full bgo`}>
      <Image
        className={imgclass}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        src={src}
        alt=""
        placeholder='blur' />

      <div className={`flex z-10 flex-col ${containerclass}`}>
        {children}
      </div>
    </section>
  );
}