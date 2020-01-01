import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname, basename, extname, resolve } from "path";
import { mdToHtml, adocToHtml } from "@pyroslides/parser";
import merge from "deepmerge";
import yaml from "yaml";
import toml from "toml";

const defaultOptions = {
  document: {
    title: "Pyro",
    js: ["build/pyro.js"],
    css: ["build/pyro.css"]
  }
};

export const replaceExt = (path: string, ext: string) => {
  return join(dirname(path), basename(path, extname(path)) + ext);
};

export const transform = (path: string) => {
  const yamlConfigPath = join(dirname(resolve(path)), "pyroconfig.yaml");
  const yamlConfigExists = existsSync(yamlConfigPath);
  const tomlConfigPath = join(dirname(resolve(path)), "pyroconfig.toml");
  const tomlConfigExists = existsSync(tomlConfigPath);
  const configOptions = yamlConfigExists
    ? yaml.parse(readFileSync(yamlConfigPath, { encoding: "utf8" }))
    : tomlConfigExists
    ? toml.parse(readFileSync(tomlConfigPath, { encoding: "utf8" }))
    : {};
  const options = merge(defaultOptions, configOptions);
  const content = readFileSync(path, { encoding: "utf8" });
  const parser = extname(path) === ".md" ? mdToHtml : adocToHtml;
  const html = parser(content, options, true);
  const htmlPath = replaceExt(path, ".html");
  writeFileSync(htmlPath, html);
};
