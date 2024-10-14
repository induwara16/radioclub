import { readdirSync } from "fs";
import { parse } from "path";

export function getProjects() {
  return readdirSync('content/projects').map(function (file) {
    return parse(file).name
  });
}

export function getProjectProps(name) {
  const { attributes: { start, end, gallery, ...attributes }, html } = require(`../content/projects/${name}.md`);

  let status = '';
  const s = new Date(start), e = new Date(end), n = new Date();

  if (e && (s < n && e > n)) {
    status = 'ongoing';
  }
  else {
    status = s < n ? 'concluded' : 'upcoming'
  }

  return {
    ...attributes,
    name,
    html,
    start: formatDate(start),
    end: end ? formatDate(end) : null,
    status,
    gallery: gallery.map(function (pic) {
      return {
        src: pic,
        title: attributes.title
      };
    })
  };
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}