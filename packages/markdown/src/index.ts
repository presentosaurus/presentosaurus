import unified from "unified";
import markdown from "remark-parse";
import frontmatter from "remark-frontmatter";
import math from "remark-math";
import remark2rehype from "remark-rehype";
import { slides } from "./rehype-slides";
import doc from "rehype-document";
import format from "rehype-format";
import html from "rehype-stringify";
import merge from "deepmerge";
import yaml from "yaml";
import toml from "toml";
import { handlers } from "./handlers";

const extractFrontmatter = (md: string) => {
  const ast: any = unified()
    .use(markdown)
    .use(frontmatter, ["yaml", "toml"])
    .parse(md);
  const node = ast.children.find(
    child => child.type === "yaml" || child.type === "toml"
  );
  const parser = {
    yaml: yaml.parse,
    toml: toml.parse
  };
  return node ? parser[node.type](node.value) : {};
};

export const mdToHtml = (md: string, options?, withDocument?: boolean) => {
  const presentationOptions: any = merge(options || {}, extractFrontmatter(md));

  const converter = unified()
    .use(markdown)
    .use(frontmatter, ["yaml", "toml"])
    .use(math)
    .use(remark2rehype, { handlers })
    .use(slides, presentationOptions);

  if (withDocument) {
    converter.use(doc, presentationOptions.document);
  }

  converter.use(format).use(html);

  return String(converter.processSync(md));
};
