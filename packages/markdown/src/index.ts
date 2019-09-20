import { Converter } from "showdown";
import { pyroExtension } from "./pyro-markdown-extension";

const converter = new Converter({ extensions: [pyroExtension] });
converter.setFlavor("github");

export const mdToHtml = (md: string) => converter.makeHtml(md);
