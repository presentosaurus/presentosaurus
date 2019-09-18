module.exports = (): showdown.ShowdownExtension[] => {
  return [
    {
      type: "lang",
      filter: function(text, converter) {
        const mdslides = text.split("\n\n---\n\n");
        if (mdslides.length <= 1) return text;

        const slides = mdslides
          .map(s => converter.makeHtml(s))
          .map(s => `<pyro-slide>\n${s}\n</pyro-slide>`)
          .join("\n");
        return `<div>\n<pyro-presentation>\n${slides}\n</pyro-presentation>\n</div>`;
      }
    }
  ];
};
