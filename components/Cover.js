import Image from "next/image";

export default function Cover({ children, src, imgclass, overlayclass, containerclass, ...props }) {
  return (
    <section {...props} className={`flex flex-col ${overlayclass} bgo`}>
      <Image
        className={imgclass}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        src={src}
        alt="" />

      <div className={`flex flex-col ${containerclass}`}>
        {children}
      </div>
    </section>
  );
}