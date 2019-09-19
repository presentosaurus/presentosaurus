import showdown = require("showdown");
const pyro = require("./pyro-markdown-extension");

showdown.setFlavor("github");

const converter = new showdown.Converter({ extensions: [pyro] });

module.exports.mdToHtml = (md: string) => converter.makeHtml(md);
