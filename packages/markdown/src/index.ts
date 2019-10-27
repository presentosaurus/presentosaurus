import unified from "unified";
import markdown from "remark-parse";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import { slides } from "./rehype-slides";
import format from "rehype-format";
import html from "rehype-stringify";
import YAML from "yaml";
import merge from "deepmerge";
import { handlers } from "./handlers";

export const mdToHtml = (md: string, options?) => {
  const [yamlOptions, ...mdslides] = md.split("\n---\n");

  const presentationOptions = merge(
    options || {},
    YAML.parse(yamlOptions) || {}
  );

  const converter = unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype, { handlers })
    .use(slides, presentationOptions)
    .use(format)
    .use(html);

  return String(converter.processSync(mdslides.join("\n---\n")));
};
