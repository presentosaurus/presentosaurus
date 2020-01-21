import { html } from "lit-html";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Code",
  component: "ps-code"
};

export const Code = () => html`
  <ps-code
    language="${text("language", "js")}"
    line-numbers=${boolean("line-numbers", true)}
    >${text("code", "const add = (a, b) => a + b")}</ps-code
  >
`;

export const FromSourceFile = () => html`
  <ps-code
    language="${text("language", "ts")}"
    src="${text("src", "/assets/fizzbuzz.ts")}"
    line-numbers=${boolean("line-numbers", true)}
    highlight-lines="${text("highlight-lines", "2-4, 8")}"
  ></ps-code>
`;
