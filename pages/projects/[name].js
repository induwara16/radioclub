import Head from "next/head";
import Image from "next/image";

import { getProjects } from "../../util/projects";
import Header from "../../components/Header";

export default function Project({ title, featured, html }) {
  return (
    <>
      <Head>
        <title key='title'>{`${title} - The Radio Club`}</title>
        <meta key='og-title' property="og:title" content={`${title} - The Radio Club`} />
      </Head>

      <Header text={title} />

      <section className="bg-neutral-900 cols-1 no-mwn">
        <div className="mx-auto !text-justify">
          <Image alt={title} className="!mt-0" src={require(`../../content/gallery/${featured}`)} />
          <span></span>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </>
  );
}

export function getStaticProps({ params: { name } }) {
  const project = require(`../../content/projects/${name}.md`);

  return {
    props: {
      ...project.attributes,
      html: project.html
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
