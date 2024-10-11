import Head from "next/head";
import Image from "next/image";

import { TiCalendar } from "react-icons/ti";

import { formatDate, getProjects } from "../../util/projects";
import Header from "../../components/Header";

export default function Project({ title, featured, html, start_str, end, end_str }) {
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

          <div className="text-gray-400 text-sm flex font-semibold gap-2">
            <span className="flex">
              <TiCalendar className="text-lg mr-1" /> {start_str} {end && <><span className="mx-1.5">—</span> {end_str}</>}
            </span>


          </div>

          <hr className="!mt-4 !mb-8" />

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </>
  );
}

export function getStaticProps({ params: { name } }) {
  const { attributes, html } = require(`../../content/projects/${name}.md`);

  return {
    props: {
      ...attributes,
      html,
      start_str: formatDate(attributes.start),
      end_str: formatDate(attributes.end)
    }
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
