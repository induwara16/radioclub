import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

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