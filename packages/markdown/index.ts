const showdown = require("showdown");
const fs = require("fs");

const converter = new showdown.Converter();
const text = fs.readFileSync("index.md", "utf8");
const html = converter.makeHtml(text);

console.log(html);
