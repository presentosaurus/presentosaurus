import { html } from "lit-html";

export default {
  title: "Math",
  component: "pyro-math"
};

export const Front = () => html`
  <pyro-math expression="\\int a + b = c - d"></pyro-math>
`;
