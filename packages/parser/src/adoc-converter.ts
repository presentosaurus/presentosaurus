import asciidoctor from "@asciidoctor/core";

const htmlConverter = asciidoctor().Html5Converter.$new();

export const adocConverter = options => ({
  convert: (node, transform) => {
    switch (node.getNodeName()) {
      case "document":
        return `<pyro-presentation options='${JSON.stringify(
          options
        )}'>${node.getContent()}</pyro-presentation>`;
      case "section":
        return `<pyro-slide><h2>${node.getTitle()}</h2>${node.getContent()}</pyro-slide>`;
      case "listing":
        return `<pre><pyro-code language="${node.getAttribute(
          "language"
        )}">${node.getContent()}</pyro-code></pre>`;
      case "stem":
        return `<pyro-math ascii-math=${node.getAttribute("style") ===
          "asciimath"} expression="${node.getContent()}"></pyro-math>`;
      case "inline_quoted":
        if (node.type === "asciimath" || node.type === "latexmath") {
          return `<pyro-math inline ascii-math=${node.type ===
            "asciimath"} expression="${node.text}"></pyro-math>`;
        } else {
          return htmlConverter.convert(node, transform);
        }
      default:
        return htmlConverter.convert(node, transform);
    }
  }
});
