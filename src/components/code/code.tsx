import { Component, h, Host, Prop } from "@stencil/core";
import Prism from "prismjs";

@Component({
  tag: "pyro-code",
  styleUrl: "code.css"
})
export class Code {
  @Prop() language: string;

  componentDidLoad() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Host>
        <pre>
          <code class={`language-${this.language}`}>
            <slot />
          </code>
        </pre>
      </Host>
    );
  }
}
