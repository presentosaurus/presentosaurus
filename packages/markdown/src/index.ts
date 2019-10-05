import { Converter } from "showdown";
import YAML from "yaml";
import { pyroExtension } from "./pyro-markdown-extension";

const converter = new Converter({ extensions: [pyroExtension] });
converter.setFlavor("github");
converter.setOption("simpleLineBreaks", false);

export const mdToHtml = (md: string) => {
  const [options, ...mdslides] = md.split("\n---\n");

  const optionsProp = JSON.stringify(YAML.parse(options) || {});

  const slides = mdslides
    .map(s => converter.makeHtml(s))
    .map(s => `<pyro-slide>\n${s}\n</pyro-slide>`)
    .join("\n");
  return `<pyro-presentation options='${optionsProp}'>\n${slides}\n</pyro-presentation>`;
};
