import { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";

export default function ScrollToTop() {
  const [hide, setHide] = useState(true);

  useEffect(function () {
    function onScroll() {
      if (window.scrollY <= 300)
        setHide(true);
      else if (window.scrollY > 300)
        setHide(false);
    };

    window.addEventListener('scroll', onScroll);

    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <button
      className={`${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'} flex fixed !p-2 btn btn-fill rounded-full size-12 bottom-8 right-5 xs:right-8 xs:bottom-10 shadow-lg z-[1000]`}
      onClick={function () { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
      <TbArrowUp className="m-auto size-full" />
    </button >
  );
}