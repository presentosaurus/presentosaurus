import u from "unist-builder";
import h from "hastscript";

const splitByTag = (children, tag: string) =>
  children.reduce(
    (acc, child) => {
      child.tagName === tag ? acc.push([]) : acc[acc.length - 1].push(child);
      return acc;
    },
    [[]]
  );

export const slides = options => {
  return tree => {
    const slideNodes = splitByTag(tree.children, "hr").map(children =>
      h("pyro-slide", children)
    );
    const presentationNode = h(
      "pyro-presentation",
      { options: JSON.stringify(options) },
      slideNodes
    );
    return u("root", [presentationNode]);
  };
};
