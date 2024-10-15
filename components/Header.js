import Cover from './Cover';
import landing_bg from '../images/landing-bg.jpg';

export default function Header({ text }) {
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