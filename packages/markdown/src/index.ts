import unified from "unified";
import markdown from "remark-parse";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import format from "rehype-format";
import html from "rehype-stringify";
import YAML from "yaml";
import merge from "deepmerge";
import { handlers } from "./handlers";

const converter = unified()
  .use(markdown)
  .use(math)
  .use(remark2rehype, { handlers })
  .use(format)
  .use(html);

export const mdToHtml = (md: string, options?) => {
  const [yamlOptions, ...mdslides] = md.split("\n---\n");

  const presentationOptions = merge(
    options || {},
    YAML.parse(yamlOptions) || {}
  );

  const optionsProp = JSON.stringify(presentationOptions);

  const slides = mdslides
    .map(s => converter.processSync(s))
    .map(s => `<pyro-slide>${s}</pyro-slide>`)
    .join("\n");
  return `<pyro-presentation options='${optionsProp}'>\n${slides}\n</pyro-presentation>`;
};
