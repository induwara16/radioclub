import { readdirSync } from "fs";
import { parse } from "path";

export function getProjects() {
  return readdirSync('content/projects').map(function (file) {
    return parse(file).name
  });
}