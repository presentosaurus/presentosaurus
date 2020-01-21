import { html } from "lit-html";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Math",
  component: "ps-math"
};

export const Math = () => html`
  <ps-math
    expression="${text("expression", "sum^n i = 1/2n(n+1)")}"
    ascii-math=${boolean("ascii-math", true)}
  ></ps-math>
`;
