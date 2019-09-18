import showdown = require("showdown");
import fs = require("fs");

const pyro = require("./pyro-markdown-extension");

showdown.setFlavor("github");
showdown.extension("pyro", pyro);

const converter = new showdown.Converter({
  extensions: ["pyro"]
});
const text = fs.readFileSync("index.md", "utf8");
const html = converter.makeHtml(text);

console.log(html);
