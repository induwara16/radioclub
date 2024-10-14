import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";

import { FacebookIcon, FacebookShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from "react-share";
import { getProjectProps, getProjects } from "../../util/projects";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import { ProjectDate, ProjectStatus } from "../../components/ProjectsCarousel";

export default function Project({ title, featured, html, start, end, status, gallery, name }) {
  const share = `${title} By RCRC\n`;
  const [url, setUrl] = useState('');

  useEffect(function () {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <Head>
        <title key='title'>{`${title} - The Radio Club`}</title>
        <meta key='og-title' property="og:title" content={`${title} - The Radio Club`} />
      </Head>

      <Header text={title} />

      <section className="bg-neutral-900 cols-1 no-mwn">
        <div className="mx-auto !text-left">
          <Image alt={title} className="!mt-0 !mb-5" src={require(`../../content/gallery/${featured}`)} />

          <div className="flex max-[600px]:flex-col gap-3">
            <div className={`flex font-semibold gap-2 mr-4 ${end ? 'max-[380px]:flex-col' : ''}`}>
              <ProjectDate start={start} end={end} />
              <ProjectStatus status={status} />
            </div>
            <div className="flex gap-x-1.5">
              <FacebookShareButton url={url}>
                <FacebookIcon className="rounded-full size-7" />
              </FacebookShareButton>
              <TwitterShareButton url={url} title={share}>
                <XIcon className="rounded-full size-7" />
              </TwitterShareButton>
              <WhatsappShareButton url={url} title={share} seperator=''>
                <WhatsappIcon className="rounded-full size-7" />
              </WhatsappShareButton>
            </div>
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
