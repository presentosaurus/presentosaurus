import { html } from "lit-html";
import { text, withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Math",
  component: "pyro-math",
  decorators: [withKnobs]
};

export const Math = () => html`
  <pyro-math
    expression="${text("expression", "sum^n i = 1/2n(n+1)")}"
    ascii-math=${boolean("ascii-math", true)}
  ></pyro-math>
`;
