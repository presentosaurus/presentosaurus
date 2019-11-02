import asciidoctor from "@asciidoctor/core";

const htmlConverter = asciidoctor().Html5Converter.$new();

export const adocConverter = (options?) => ({
  convert: (node, transform) => {
    switch (node.getNodeName()) {
      case "document":
        return `<pyro-presentation options='${JSON.stringify(
          options
        )}'>${node.getContent()}</pyro-presentation>`;
      case "section":
        return `<pyro-slide><h2>${node.getTitle()}</h2>${node.getContent()}</pyro-slide>`;
      default:
        return htmlConverter.convert(node, transform);
    }
  }
});
