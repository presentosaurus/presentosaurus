import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import format from "rehype-format";
import html from "rehype-stringify";
import YAML from "yaml";
import { handlers } from "./handlers";

const converter = unified()
  .use(markdown)
  .use(remark2rehype, { handlers })
  .use(format)
  .use(html);

export const mdToHtml = (md: string) => {
  const [options, ...mdslides] = md.split("\n---\n");

  const optionsProp = JSON.stringify(YAML.parse(options) || {});

  const slides = mdslides
    .map(s => converter.processSync(s))
    .map(s => `<pyro-slide>${s}</pyro-slide>`)
    .join("\n");
  return `<pyro-presentation options='${optionsProp}'>\n${slides}\n</pyro-presentation>`;
};
