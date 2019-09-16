import { Component, Prop, Element } from "@stencil/core";
import katex from "katex";

@Component({
  tag: "pyro-math",
  styleUrl: "math.css"
})
export class Code {
  @Prop() expression: string = "";
  @Prop() inline: boolean = false;

  @Element() el: HTMLElement;

  componentDidLoad() {
    katex.render(this.expression, this.el, { displayMode: !this.inline });
  }
}
