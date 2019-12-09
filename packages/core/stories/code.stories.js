import { html } from "lit-html";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Code",
  component: "pyro-code"
};

export const Code = () => html`
  <pyro-code
    language="${text("language", "js")}"
    line-numbers=${boolean("line-numbers", true)}
    >${text("code", "const add = (a, b) => a + b")}</pyro-code
  >
`;

export const FromSourceFile = () => html`
  <pyro-code
    language="${text("language", "ts")}"
    src="${text("src", "/assets/fizzbuzz.ts")}"
    line-numbers=${boolean("line-numbers", true)}
    highlight-lines="${text("highlight-lines", "2-4, 8")}"
  ></pyro-code>
`;
