import showdown = require("showdown");
import fs = require("fs");

const pyro = require("./pyro-markdown-extension");

showdown.setFlavor("github");

const converter = new showdown.Converter({ extensions: [pyro] });
const text = fs.readFileSync("index.md", "utf8");
const html = converter.makeHtml(text);

console.log(html);

module.exports.mdToHtml = (md: string) => converter.makeHtml(md);
