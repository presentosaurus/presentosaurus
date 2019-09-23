import { Converter } from "showdown";
import { pyroExtension } from "./pyro-markdown-extension";

const converter = new Converter({ extensions: [pyroExtension] });
converter.setFlavor("github");
converter.setOption("simpleLineBreaks", false);

export const mdToHtml = (md: string) => {
  const mdslides = md.split("\n---\n");

  const slides = mdslides
    .map(s => converter.makeHtml(s))
    .map(s => `<pyro-slide>\n${s}\n</pyro-slide>`)
    .join("\n");
  return `<pyro-presentation>\n${slides}\n</pyro-presentation>`;
};
