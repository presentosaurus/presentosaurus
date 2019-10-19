import detab from "detab";
import u from "unist-builder";

const code = (h, node) => {
  const value = node.value ? detab(node.value + "\n") : "";
  const language = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {
    language
  };

  return h(node.position, "pyro-code", props, [u("text", value)]);
};

export const handlers = {
  code
};
