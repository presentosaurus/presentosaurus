import detab from "detab";
import u from "unist-builder";

const code = (h, node) => {
  const value = node.value ? detab(node.value + "\n") : "";
  const language = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {
    language
  };

  return h(node.position, "pre", [
    h(node, "ps-code", props, [u("text", value)])
  ]);
};

const math = (h, node) => {
  const value = node.value ? detab(node.value) : "";
  const props = {
    expression: value
  };

  return h(node.position, "ps-math", props);
};

const inlineMath = (h, node) => {
  const value = node.value ? detab(node.value) : "";
  const props = {
    expression: value,
    inline: true
  };

  return h(node.position, "ps-math", props);
};

export const handlers = {
  code,
  math,
  inlineMath
};
