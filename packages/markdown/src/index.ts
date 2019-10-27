import unified from "unified";
import markdown from "remark-parse";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import { slides } from "./rehype-slides";
import doc from "rehype-document";
import format from "rehype-format";
import html from "rehype-stringify";
import YAML from "yaml";
import merge from "deepmerge";
import { handlers } from "./handlers";

export const mdToHtml = (md: string, options?, withDocument?: boolean) => {
  const [yamlOptions, ...mdslides] = md.split("\n---\n");

  const presentationOptions: any = merge(
    options || {},
    YAML.parse(yamlOptions) || {}
  );

  const converter = unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype, { handlers })
    .use(slides, presentationOptions);

  if (withDocument) {
    converter.use(doc, presentationOptions.document);
  }

  converter.use(format).use(html);

  return String(converter.processSync(mdslides.join("\n---\n")));
};
