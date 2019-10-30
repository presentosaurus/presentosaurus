import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname, basename, extname, resolve } from "path";
import { mdToHtml } from "@pyroslides/markdown";
import yaml from "yaml";

export const replaceExt = (path: string, ext: string) => {
  return join(dirname(path), basename(path, extname(path)) + ext);
};

export const transform = (path: string) => {
  const pyroconfigPath = join(dirname(resolve(path)), "pyroconfig.yml");
  const pyroconfigExists = existsSync(pyroconfigPath);
  const options = pyroconfigExists
    ? yaml.parse(readFileSync(pyroconfigPath, { encoding: "utf8" }))
    : undefined;
  const md = readFileSync(path, { encoding: "utf8" });
  const html = mdToHtml(md, options, true);
  const htmlPath = replaceExt(path, ".html");
  writeFileSync(htmlPath, html);
};
