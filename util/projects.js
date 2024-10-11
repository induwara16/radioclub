import { readdirSync } from "fs";
import { parse } from "path";

export function getProjects() {
  return readdirSync('content/projects').map(function (file) {
    return parse(file).name
  });
}

export function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}