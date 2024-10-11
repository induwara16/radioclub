import Head from "next/head";
import Image from "next/image";

import { TiCalendar } from "react-icons/ti";

import { getProjectProps, getProjects } from "../../util/projects";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";

export default function Project({ title, featured, html, start, end, status, gallery }) {
  return (
    <>
      <Head>
        <title key='title'>{`${title} - The Radio Club`}</title>
        <meta key='og-title' property="og:title" content={`${title} - The Radio Club`} />
      </Head>

      <Header text={title} />

      <section className="bg-neutral-900 cols-1 no-mwn">
        <div className="mx-auto !text-justify">
          <Image alt={title} className="!mt-0 !mb-5" src={require(`../../content/gallery/${featured}`)} />

          <div className={`flex font-semibold gap-2 ${end ? 'max-[380px]:flex-col' : ''}`}>
            <label className="flex my-auto text-gray-400 text-sm mr-2">
              <TiCalendar className="text-lg mr-1" /> {start} {end && <><span className="mx-1.5">—</span> {end}</>}
            </label>

            <label className={`${status === 'concluded' ? 'bg-sky-600' : status === 'ongoing' ? 'bg-green-500' : 'bg-gray-500'} px-1.5 py-1 text-xs text-white rounded mr-auto`}>
              {status.toUpperCase()}
            </label>
          </div>

          <hr className="!mt-4 !mb-8" />

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <Gallery pics={gallery} />
        </div>
      </section>
    </>
  );
}

export function getStaticProps({ params: { name } }) {
  return {
    props: getProjectProps(name)
  };
}

export function getStaticPaths() {
  return {
    paths: getProjects().map(function (file) {
      return {
        params: { name: file },
      };
    }),
    fallback: false
  };
}
