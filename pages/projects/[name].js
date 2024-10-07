import Link from "next/link";
import { getProjects } from "../../util/projects";

function Test({ children }) {
  return <h1>{children}</h1>;
}

export default function Project({ html }) {
  return <>{html}</>;
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