import asciidoctor from "@asciidoctor/core";

const htmlConverter = asciidoctor().Html5Converter.$new();

export const adocConverter = options => ({
  convert: (node, transform) => {
    switch (node.getNodeName()) {
      case "document":
        return `<ps-presentation options='${JSON.stringify(
          options
        )}'>${node.getContent()}</ps-presentation>`;
      case "section":
        return `<ps-slide><h2>${node.getTitle()}</h2>${node.getContent()}</ps-slide>`;
      case "listing":
        return `<pre><ps-code language="${node.getAttribute(
          "language"
        )}">${node.getContent()}</ps-code></pre>`;
      case "stem":
        return `<ps-math ascii-math=${node.getAttribute("style") ===
          "asciimath"} expression="${node.getContent()}"></ps-math>`;
      case "inline_quoted":
        if (node.type === "asciimath" || node.type === "latexmath") {
          return `<ps-math inline ascii-math=${node.type ===
            "asciimath"} expression="${node.text}"></ps-math>`;
        } else {
          return htmlConverter.convert(node, transform);
        }
      default:
        return htmlConverter.convert(node, transform);
    }
  }
});
